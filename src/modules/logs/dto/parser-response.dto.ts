export type GameDetails = {
  total_kills: number;
  players: string[];
  kills: Record<string, number>;
};

export class LogParserResponseDto {
  [key: string]: GameDetails;
}
