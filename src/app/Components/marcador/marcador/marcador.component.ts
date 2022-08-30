import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { swiperConfigMarcador } from 'src/assets/mocks/carousel-config.mocks';
import { WorldCupService } from 'src/app/services/world-cup.service';
import { LiveMatches, Match } from 'src/app/models/live-matches.model';
import SwiperCore, { Virtual } from 'swiper';

SwiperCore.use([Virtual]);

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.scss']
})
export class MarcadorComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  matches: Match[] = [];
  swiperConfigMarcador: SwiperOptions = swiperConfigMarcador;

  constructor(private worldCupService: WorldCupService) {}

  ngOnInit(): any {
    this.getLiveMatches();
  }

  getLiveMatches() {
    this.worldCupService.getMockLiveMatches('?live=all&league=281').subscribe(
      (res: LiveMatches) => {
        this.matches = res.response;
        this.getMockLiveMatchesInterval(30 * 1000 * 60); // 30 Minutos
      },
      (e) => console.error(e)
    );
  }

  getMockLiveMatchesInterval(delay: number) {
    interval(delay) // 30 Minutes
      .pipe(mergeMap(() => this.worldCupService.getMockLiveMatches2()))
      .subscribe(
        (res: LiveMatches) => (this.matches = res.response),
        (e) => console.error(e)
      );
  }
}
