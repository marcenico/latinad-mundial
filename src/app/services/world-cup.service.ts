import { EventEmitter, Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { LiveMatches } from '../models/live-matches.model';
import { UtilsService } from './utlis.service';
import { Table } from '../models/table.model';

@Injectable({
  providedIn: 'root'
})
export class WorldCupService {
  private token = '80c1cdfd17c336d9ec08d8a1abde4992';
  private options = {
    headers: new HttpHeaders().set('x-rapidapi-key', this.token).set('x-rapidapi-host', environment.apiSports)
  };

  public thereIsAGoal$ = new EventEmitter<{ isGoal: boolean; slideIndex: number }>();

  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  thereIsAGoal(value: any) {
    this.thereIsAGoal$.emit(value);
  }

  public getMatches(filters: string = ''): Observable<LiveMatches> {
    filters += `&timezone=${environment.timezone}`;
    return this.http.get<LiveMatches>(`${environment.apiSports}/fixtures${filters}`, this.options).pipe(
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
    return this.http.get(`${environment.apiSports}/standings${filters}`, this.options).pipe(
      map((data: any) => {
        let groupsPartOne: Table[] = data.response[0].league.standings.slice(0, 4);
        let groupsPartTwo: Table[] = data.response[0].league.standings.slice(4, 8);
        groupsPartOne = this.utilsService.filterTableData(groupsPartOne);
        groupsPartTwo = this.utilsService.filterTableData(groupsPartTwo);
        return [groupsPartOne, groupsPartTwo];
      })
    );
  }

  //#region Fake Server
  public getMockLiveMatches(filters: string = ''): Observable<LiveMatches> {
    return this.http.get<LiveMatches>(`assets/mocks/mock-live-matches-1.json`, this.options).pipe(
      map((data: any) => {
        let filerData: LiveMatches = {
          errors: data.errors,
          response: this.utilsService.filterMatchData(data.response)
        };

        return filerData;
      })
    );
  }

  public getMockLiveMatches2(filters: string = ''): Observable<LiveMatches> {
    return this.http.get<LiveMatches>(`assets/mocks/mock-live-matches-2.json`, this.options).pipe(
      map((data: any) => {
        let filerData: LiveMatches = {
          errors: data.errors,
          response: this.utilsService.filterMatchData(data.response)
        };

        return filerData;
      })
    );
  }

  public getMockProximosPartidos(filters: string = ''): Observable<LiveMatches> {
    return this.http.get('assets/mocks/mock-proximos-partidos.json').pipe(
      map((data: any) => {
        let filerData: LiveMatches = {
          errors: data.errors,
          response: this.utilsService.filterMatchData(data.response)
        };
        return filerData;
      })
    );
  }

  public getMockTablePoints(filters: string = ''): Observable<any[]> {
    return this.http.get('assets/mocks/mock-tabla-puntos.json').pipe(
      map((data: any) => {
        let groupsPartOne: any = data.response[0].league.standings.slice(0, 4);
        let groupsPartTwo: any = data.response[0].league.standings.slice(4, 8);

        groupsPartOne = this.utilsService.filterTableData(groupsPartOne);
        groupsPartTwo = this.utilsService.filterTableData(groupsPartTwo);
        return [groupsPartOne, groupsPartTwo];
      })
    );
  }
  //#endregion
}
