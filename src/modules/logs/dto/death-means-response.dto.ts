export class DeathMeansResponseDto {
  [key: string]: {
    kills_by_means: {
      [key: string]: number;
    };
  };
}
