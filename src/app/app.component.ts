import { Component, ViewChild, OnInit } from '@angular/core';
import { swiperConfig1 } from './mocks/carousel-config.mocks';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { MarcadorComponent } from './Components/marcador/marcador/marcador.component';
import { WorldCupService } from './services/world-cup.service';
import SwiperCore, { Virtual } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  @ViewChild('marcador', { static: false }) marcador?: MarcadorComponent;
  swiperConfig: any = swiperConfig1;
  thereIsAGoal = false;
  timeGoalCelebration = 5; // En segundos

  constructor(private worldCupService: WorldCupService) {
    SwiperCore.use([Virtual]);
  }

  ngOnInit(): void {
    this.listenerGoalEmmiter();
  }

  listenerGoalEmmiter() {
    this.worldCupService.thereIsAGoal$.subscribe((res) => {
      this.thereIsAGoal = res.isGoal;
      setTimeout(() => {
        this.thereIsAGoal = false;
        this.swiper?.swiperRef.slideTo(1);
        this.marcador?.swiper?.swiperRef.slideTo(res.slideIndex);
      }, this.timeGoalCelebration * 1000);
    });
  }
}
