import { Injectable, Logger } from '@nestjs/common';
import { LogParserResponseDto } from './dto/parser-response.dto';
import { KillData } from './types/kill-data.type';
import { Command } from './enums/command.enum';
import { RankingResponseDto } from './dto/ranking-response.dto';
import { Game } from './interfaces/game.interface';

@Injectable()
export class LogsService {
  private readonly logger = new Logger(LogsService.name);
  private currentGame: Game = null;
  private games: LogParserResponseDto = {};
  private gameIndex = 1;

  parse(file: Express.Multer.File): LogParserResponseDto {
    const fileContent = file.buffer.toString('utf-8');
    const lines = fileContent.split('\n');

    for (const line of lines) {
      const input = this.getInput(line);
      if (input === Command.START_GAME) {
        this.getNewGame();
      }
      if (input === Command.PLAYER_JOIN) {
        const playerName = this.getPlayerName(line);
        this.currentGame.addPlayer(playerName);
      }
      if (input === Command.KILL) {
        this.currentGame.increaseTotalKills();
        const killData = this.getKillData(line);
        this.currentGame.handleKill(killData);
      }
    }
    return this.games;
  }

  getRanking(file: Express.Multer.File): RankingResponseDto {
    const ranking: RankingResponseDto = {};
    const fileContent = file.buffer.toString('utf-8');
    const lines = fileContent.split('\n');
    for (const line of lines) {
      const input = this.getInput(line);
      if (input === Command.KILL) {
        const killData = this.getKillData(line);
        const { killer } = killData;
        if (killer === '<world>') continue;
        ranking[killer] ? ranking[killer]++ : (ranking[killer] = 1);
      }
    }
    const sortedRanking = Object.entries(ranking).sort(([, a], [, b]) => b - a);
    return Object.fromEntries(sortedRanking);
  }

  private getInput(line: string): Command | null {
    const input = line.match(/^.{0,7}([a-z A-Z][^:]*)/);

    if (input && Object.values(Command).includes(input[1] as Command)) {
      return input[1] as Command;
    }
    return null;
  }

  private getKillData(line: string): KillData {
    try {
      const regex = /\s*(\d{1,2}:\d{2}) Kill: \d+ \d+ \d+: (.+?) killed (.+?) by .+/;
      const players = line.match(regex);
      return { killer: players[2], killed: players[3] };
    } catch (e) {
      this.logger.error(`Erro ao extrair dados do kill: ${line}`);
      return { killer: '', killed: '' };
    }
  }

  private getPlayerName(line: string): string | null {
    const regex = /n\\([^\\]+)/;
    return line.match(regex)[1];
  }

  private getNewGame(): void {
    if (this.currentGame) {
      const kills: Record<string, number> = {};
      const players = this.currentGame.getPlayers();
      for (const player of players) {
        const playerData = this.currentGame.getPlayer(player);
        if (playerData) {
          kills[player] = playerData.getKills();
        }
      }
      const finishedGame = {
        total_kills: this.currentGame.getTotalKills(),
        players: this.currentGame.getPlayers(),
        kills,
      };
      this.games[`game_${this.gameIndex}`] = finishedGame;
      this.gameIndex++;
    }
    this.currentGame = new Game();
  }
}
