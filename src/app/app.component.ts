import { Component } from '@angular/core';
import { swiperConfig1 } from './mocks/carousel-config.mocks';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  swiperConfig: SwiperOptions = swiperConfig1;

  constructor() {
    SwiperCore.use([Autoplay]);
  }
}
