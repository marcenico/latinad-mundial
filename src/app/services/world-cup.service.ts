import { EventEmitter, Injectable, isDevMode } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { LiveMatches } from '../models/live-matches.model';
import { UtilsService } from './utlis.service';
import { Table } from '../models/table.model';
import { ConfigLoaderService } from '../config-loader.service';

@Injectable({
  providedIn: 'root'
})
export class WorldCupService {
  private token = '';
  private options: any;
  private isDevMode = true;

  public thereIsAGoal$ = new EventEmitter<{ isGoal: boolean; slideIndex: number }>();

  constructor(
    private http: HttpClient,
    private utilsService: UtilsService,
    private configLoaderService: ConfigLoaderService
  ) {
    this.isDevMode = isDevMode();
    this.token = this.configLoaderService.token;
    this.options = {
      headers: new HttpHeaders().set('x-rapidapi-key', this.token).set('x-rapidapi-host', environment.apiSports)
    };
  }

  thereIsAGoal(value: any) {
    this.thereIsAGoal$.emit(value);
  }

  public getMatches(filters: string = ''): Observable<LiveMatches> {
    filters += `&timezone=${environment.timezone}`;
    return this.http
      .get<LiveMatches>(
        this.isDevMode ? 'assets/mocks/mock-live-matches-1.json' : `${environment.apiSports}/fixtures${filters}`,
        this.options
      )
      .pipe(
        map((data: any) => {
          let filerData: LiveMatches = {
            errors: data.errors,
            response: this.utilsService.filterMatchData(data.response)
          };
          return filerData;
        })
      );
  }

  public getTablePoints(filters: string = ''): Observable<any> {
    return this.http
      .get(
        this.isDevMode ? 'assets/mocks/mock-tabla-puntos.json' : `${environment.apiSports}/standings${filters}`,
        this.options
      )
      .pipe(
        map((data: any) => {
          let groupsPartOne: Table[] = data.response[0].league.standings.slice(0, 4);
          let groupsPartTwo: Table[] = data.response[0].league.standings.slice(4, 8);
          groupsPartOne = this.utilsService.filterTableData(groupsPartOne);
          groupsPartTwo = this.utilsService.filterTableData(groupsPartTwo);
          return [groupsPartOne, groupsPartTwo];
        })
      );
  }
}
