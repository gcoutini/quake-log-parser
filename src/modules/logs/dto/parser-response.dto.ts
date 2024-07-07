export type Game = {
  total_kills: number;
  players: string[];
  kills: Record<string, number>;
};

export class LogParserResponseDto {
  [key: string]: Game;
}
