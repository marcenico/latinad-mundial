import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Autoplay } from 'swiper';

@NgModule({
  declarations: [],
  imports: [CommonModule, SwiperModule],
  exports: [SwiperModule]
})
export class SharedModule {
  constructor() {
    SwiperCore.use([Autoplay]);
  }
}
