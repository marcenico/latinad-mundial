import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WorldCupService {
  options = {
    headers: new HttpHeaders()
      .set('x-rapidapi-key', '80c1cdfd17c336d9ec08d8a1abde4992')
      .set('x-rapidapi-host', 'https://v3.football.api-sports.io')
  };

  private apiUrl = 'http://localhost:5000/data';
  private apiUrl2 = 'http://localhost:5005/data';

  constructor(private http: HttpClient) {}

  // public getPartidoEnVivo(filters: string = ''): Observable<any> {
  //   return this.http.get(
  //     `${environment.apiSports}/fixtures${filters}`,
  //     this.options
  //   );
  // }
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

  /*Método para JSON. Fake server -----------------------------------------------*/

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
}
