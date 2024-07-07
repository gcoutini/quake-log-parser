import { KillData } from '../types/kill-data.type';
import { Player } from './player.interface';

export class Game {
  private totalKills: number;
  private players: Map<string, Player>;
  private killsByMeans: Map<string, number>;

  constructor() {
    this.totalKills = 0;
    this.players = new Map();
    this.killsByMeans = new Map();
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

  handleKill({ killer, killed, meanOfDeath }: KillData): void {
    if (killer === '<world>') {
      this.decreasePlayerKill(killed);
    } else {
      this.increasePlayerKill(killer);
    }
    this.setKillByMean(meanOfDeath);
  }

  setKillByMean(meanOfDeath: string): void {
    if (this.killsByMeans.has(meanOfDeath)) {
      this.killsByMeans.set(meanOfDeath, this.killsByMeans.get(meanOfDeath)! + 1);
    } else {
      this.killsByMeans.set(meanOfDeath, 1);
    }
  }

  getKillsByMeans(): Record<string, number> {
    const killsByMeansObj: Record<string, number> = {};
    for (const [mean, count] of this.killsByMeans.entries()) {
      killsByMeansObj[mean] = count;
    }
    return killsByMeansObj;
  }
}
