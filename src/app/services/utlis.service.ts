import { Injectable } from '@angular/core';
import { flags } from 'src/assets/mocks/object-images.mocks';
import { Away, Home, Match } from '../models/live-matches.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() {}

  public filterMatchData(response: any) {
    let matches: Match[] = [];
    response.forEach((match: any) => {
      matches.push({
        fixture: { id: match.fixture.id, status: match.fixture.status },
        teams: match.teams,
        goals: match.goals
      });
    });
    return matches;
  }

  public cambioImagenBandera(team: Home | Away) {
    let correctFlag = flags.find((flag) => flag.id === team.id);
    return correctFlag ? `assets/flags/${correctFlag.src}` : team.logo;
  }
}
