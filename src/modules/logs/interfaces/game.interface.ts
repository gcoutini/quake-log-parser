import { KillData } from '../types/kill-data.type';
import { Player } from './player.interface';

export class Game {
  private totalKills: number;
  private players: Map<string, Player>;

  constructor() {
    this.totalKills = 0;
    this.players = new Map();
  }

  getTotalKills(): number {
    return this.totalKills;
  }

  addPlayer(playerName: string): void {
    if (!this.players.has(playerName)) {
      this.players.set(playerName, new Player(playerName));
    }
  }

  getPlayer(playerName: string): Player | undefined {
    return this.players.get(playerName);
  }

  increaseTotalKills(): void {
    this.totalKills++;
  }

  increasePlayerKill(playerName: string): void {
    const player = this.players.get(playerName);
    if (player) {
      player.increaseKills();
    }
  }

  decreasePlayerKill(playerName: string): void {
    const player = this.players.get(playerName);
    if (player) {
      player.decreaseKills();
    }
  }

  getPlayers(): string[] {
    return Array.from(this.players.keys());
  }

  handleKill({ killer, killed }: KillData): void {
    if (killer === '<world>') {
      this.decreasePlayerKill(killed);
    } else {
      this.increasePlayerKill(killer);
    }
  }
}
