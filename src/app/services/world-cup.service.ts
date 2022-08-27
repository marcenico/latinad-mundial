import { EventEmitter, Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { LiveMatches } from '../models/live-matches.model';
import { UtilsService } from './utlis.service';

@Injectable({
  providedIn: 'root'
})
export class WorldCupService {
  private options = {
    headers: new HttpHeaders()
      .set('x-rapidapi-key', '80c1cdfd17c336d9ec08d8a1abde4992')
      .set('x-rapidapi-host', 'https://v3.football.api-sports.io')
  };
  private apiUrl = 'http://localhost:5000/data';
  private apiUrl2 = 'http://localhost:5005/data';

  public thereIsAGoal$ = new EventEmitter<{ isGoal: boolean; slideIndex: number }>();

  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  public getLiveMatches(filters: string = ''): Observable<LiveMatches> {
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

  thereIsAGoal(value: any) {
    this.thereIsAGoal$.emit(value);
  }

  // public getEndpoint(filters: string = ''): Observable<any> {
  //   return this.http.get(
  //     `${environment.apiSports}/fixtures${filters}`,
  //     this.options
  //   );
  // }

  // public getTable(filters: string = ''): Observable<any> {
  //   return this.http.get(
  //     `${environment.apiSports}/${filters}`,
  //     this.options
  //   );
  // }

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

  public getFixtureDemo(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  public getTableDemo(): Observable<any> {
    return this.http.get(this.apiUrl2).pipe(
      map((data: any) => {
        let groupsPartOne: any = data.response[0].league.standings.slice(0, 4);
        let groupsPartTwo: any = data.response[0].league.standings.slice(4, 8);
        return [groupsPartOne, groupsPartTwo];
      })
    );
  }
  //#endregion
}
