import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SwiperOptions } from 'swiper';

@Injectable()
export class ConfigLoaderService {
  public token = 'Not Set Yet';
  public league = 1;
  public useMundialMocks = false;
  public mainSwiperConfig: any;
  public marcadorSwiperConfig: SwiperOptions;
  public tablaPuntosSwiperConfig: SwiperOptions;

  constructor(private httpClient: HttpClient) {}

  initialize() {
    return this.httpClient
      .get<any>('./assets/config.json')
      .pipe(
        map((response: any) => {
          this.token = response.token;
          this.league = response.league;
          this.useMundialMocks = response.useMundialMocks;
          this.mainSwiperConfig = response.mainSwiperConfig;
          this.marcadorSwiperConfig = response.marcadorSwiperConfig;
          this.tablaPuntosSwiperConfig = response.tablaPuntosSwiperConfig;
        })
      )
      .toPromise<any>();
  }
}
