export interface Table {
  team: Team;
  points: number;
  group: string;
}

export interface Team {
  id: number;
  logo: string;
  name: string;
}
