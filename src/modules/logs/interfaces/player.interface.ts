export class Player {
  private readonly name: string;
  private kills: number;

  constructor(name: string) {
    this.name = name;
    this.kills = 0;
  }

  getName(): string {
    return this.name;
  }

  getKills(): number {
    return this.kills;
  }

  increaseKills(): void {
    this.kills++;
  }

  decreaseKills(): void {
    if (this.kills > 0) this.kills--;
  }
}
