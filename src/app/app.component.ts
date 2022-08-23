import { Component, HostListener, ViewChild } from '@angular/core';
import { swiperConfig1 } from './mocks/carousel-config.mocks';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Swiper, Virtual } from 'swiper';
import { MarcadorComponent } from './Components/marcador/marcador/marcador.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  @ViewChild('marcador', { static: false }) marcador?: MarcadorComponent;
  swiperConfig: SwiperOptions = swiperConfig1;
  hayGol = false;

  constructor() {
    SwiperCore.use([Virtual]);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.hayGol) return;
    if (event.code == 'KeyG') {
      this.hayGol = true;
      setTimeout(() => {
        this.hayGol = false;
        this.swiper?.swiperRef.slideTo(0);
        this.marcador?.swiper?.swiperRef.slideTo(0);
      }, 5000);
    }
  }
}
