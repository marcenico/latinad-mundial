import { Component, OnInit, ViewChild } from '@angular/core';
import { Autoplay, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { WorldCupService } from 'src/app/services/world-cup.service';
import { LiveMatches, Match } from 'src/app/models/live-matches.model';
import SwiperCore, { Virtual } from 'swiper';
import { ConfigLoaderService } from 'src/app/config-loader.service';

SwiperCore.use([Virtual]);

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.scss']
})
export class MarcadorComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  matches: Match[] = [];
  swiperConfigMarcador: SwiperOptions;

  constructor(private worldCupService: WorldCupService, private configLoaderService: ConfigLoaderService) {
    this.swiperConfigMarcador = this.configLoaderService.swiperConfigMarcador;
  }

  ngOnInit(): any {
    this.getLiveMatches();
  }

  getLiveMatches() {
    this.worldCupService.getMatches('?live=all').subscribe(
      (res: LiveMatches) => {
        this.swiperConfigMarcador.autoplay = this.setAutoplay(res.response);
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
        (res: LiveMatches) => {
          this.swiperConfigMarcador.autoplay = this.setAutoplay(res.response);
          this.matches = res.response;
        },
        (e) => console.error(e)
      );
  }

  private setAutoplay(matches: any[]) {
    return matches.length === 1 ? undefined : { delay: 1000 * 2, disableOnInteraction: false };
  }
}
