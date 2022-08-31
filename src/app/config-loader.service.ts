import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SwiperOptions } from 'swiper';

@Injectable()
export class ConfigLoaderService {
  public token = 'Not Set Yet';
  public mainSwiperConfig: any;
  public swiperConfigMarcador: SwiperOptions;
  public swiperConfigTabla: SwiperOptions;

  constructor(private httpClient: HttpClient) {}

  initialize() {
    return this.httpClient
      .get<any>('./assets/config.json')
      .pipe(
        map((response: any) => {
          this.token = response.token;
          this.mainSwiperConfig = response.swiperConfig1;
          this.swiperConfigMarcador = response.swiperConfigMarcador;
          this.swiperConfigTabla = response.swiperConfigTabla;
        })
      )
      .toPromise<any>();
  }
}
