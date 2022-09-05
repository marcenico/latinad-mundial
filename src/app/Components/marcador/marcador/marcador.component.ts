import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { WorldCupService } from 'src/app/services/world-cup.service';
import { LiveMatches, Match } from 'src/app/models/live-matches.model';
import { ConfigLoaderService } from 'src/app/services/config-loader.service';
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
  swiperConfig: any;

  constructor(private worldCupService: WorldCupService, private configLoaderService: ConfigLoaderService) {
    this.swiperConfig = this.configLoaderService.marcadorSwiperConfig;
  }

  ngOnInit(): any {
    this.getLiveMatches();
  }

  getLiveMatches() {
    this.worldCupService.getMatches(`?live=all&league=${this.configLoaderService.league}`).subscribe(
      (res: LiveMatches) => {
        this.swiperConfig.autoplay = this.setAutoplay(res.response);
        this.matches = res.response;
        this.getMockLiveMatchesInterval(45 * 1000 * 60); // 45 Minutos
      },
      (e) => console.error(e)
    );
  }

  getMockLiveMatchesInterval(delay: number) {
    interval(delay)
      .pipe(mergeMap(() => this.worldCupService.getMatches(`?live=all&league=${this.configLoaderService.league}`)))
      .subscribe(
        (res: LiveMatches) => {
          this.swiperConfig.autoplay = this.setAutoplay(res.response);
          this.matches = res.response;
        },
        (e) => console.error(e)
      );
  }

  private setAutoplay(matches: any[]) {
    return matches.length === 1 ? undefined : { delay: 1000 * 2, disableOnInteraction: false };
  }
}
