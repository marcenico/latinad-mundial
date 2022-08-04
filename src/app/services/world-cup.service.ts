import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorldCupService {
  options = {
    headers: new HttpHeaders()
      .set('x-rapidapi-key', '80c1cdfd17c336d9ec08d8a1abde4992')
      .set('x-rapidapi-host', 'https://v3.football.api-sports.io'),
  };

  constructor(private http: HttpClient) {}

  public getFixture(filters: string = ''): Observable<any> {
    return this.http.get(
      `${environment.apiSports}/fixtures${filters}`,
      this.options
    );
  }
}
