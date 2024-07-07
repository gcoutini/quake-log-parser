import { Injectable, Logger } from '@nestjs/common';
import { Game, LogParserResponseDto } from './dto/parser-response.dto';
import { KillData } from './types/kill-data.type';
import { Command } from './enums/command.enum';
import { RankingResponseDto } from './dto/ranking-response.dto';

@Injectable()
export class LogsService {
  private readonly logger = new Logger(LogsService.name);
  private games: LogParserResponseDto = {};

  parse(file: Express.Multer.File): LogParserResponseDto {
    const fileContent = file.buffer.toString('utf-8');
    const lines = fileContent.split('\n');

    let currentGame: Game = null;
    let gameIndex = 1;

    for (const line of lines) {
      const input = this.getInput(line);
      if (input === Command.START_GAME) {
        if (currentGame) {
          this.games[`game_${gameIndex}`] = currentGame;
          gameIndex++;
        }
        currentGame = { total_kills: 0, players: [], kills: {} };
      }
      if (input === Command.PLAYER_JOIN && currentGame) {
        const playerName = this.getPlayerName(line);
        if (!currentGame.players.includes(playerName)) {
          currentGame.players.push(playerName);
          currentGame.kills[playerName] = 0;
        }
      }
      if (input === Command.KILL && currentGame) {
        currentGame.total_kills++;
        const killData = this.getKillData(line);
        const { killer, killed } = killData;
        if (killer === '<world>') {
          currentGame.kills[killed] = currentGame.kills[killed]--;
        } else {
          currentGame.kills[killer]++;
        }
      }
    }

    if (currentGame) {
      this.games[`game_${gameIndex}`] = currentGame;
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
}
