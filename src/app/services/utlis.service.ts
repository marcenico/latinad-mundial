import { Injectable } from '@angular/core';
import { flags } from 'src/app/mocks/object-images.mocks';
import { Away, Home, Match } from '../models/live-matches.model';
import { Table, Team } from '../models/table.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() {}

  public filterMatchData(response: any) {
    let auxMatches: Match[] = [];
    response.forEach((match: any) => {
      auxMatches.push({
        fixture: { id: match.fixture.id, status: match.fixture.status, date: match.fixture.date },
        teams: match.teams,
        goals: match.goals
      });
    });
    return auxMatches;
  }

  public filterTableData(tables: any) {
    tables.forEach((table: any) => {
      let auxTables: Table[] = [];
      table.forEach((data: any) => {
        auxTables.push({
          team: data.team,
          points: data.points,
          group: data.group
        });
      });

      table = auxTables;
    });

    return tables;
  }

  public cambioImagenBandera(team: Team | Home | Away) {
    let correctFlag = flags.find((flag) => flag.id === team.id);
    return correctFlag ? `assets/flags/${correctFlag.src}` : team.logo;
  }
}
