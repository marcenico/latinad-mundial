export interface LiveMatches {
  errors: any[];
  response: Match[];
}

export interface Match {
  fixture: Fixture;
  teams: Teams;
  goals: Goals;
}

interface Fixture {
  id: number;
  status: Status;
}

interface Status {
  long: string;
  short: string;
  elapsed: number;
}

export interface Teams {
  home: Home;
  away: Away;
}

export interface Home {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
}

export interface Away {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
}

export interface Goals {
  home: number;
  away: number;
}
