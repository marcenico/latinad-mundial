import { Component, HostListener } from '@angular/core';
import { swiperConfig1 } from './mocks/carousel-config.mocks';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  swiperConfig: SwiperOptions = swiperConfig1;
  hayGol = false;

  constructor() {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.hayGol) return;
    if (event.code == 'KeyG') {
      this.hayGol = true;
      setTimeout(() => (this.hayGol = false), 5000);
    }
  }
}
