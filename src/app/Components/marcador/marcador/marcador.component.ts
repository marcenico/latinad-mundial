import { Component, OnInit, ViewChild } from '@angular/core';
import { WorldCupService } from '../../../services/world-cup.service';
import { flags } from 'src/app/mocks/object-images.mocks';
import { swiperConfigMarcador } from '../../../mocks/carousel-config.mocks';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Virtual } from 'swiper';

SwiperCore.use([Virtual]);

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.scss'],
  providers: [WorldCupService]
})
export class MarcadorComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  partidos: any = [];
  swiperConfigMarcador: SwiperOptions = swiperConfigMarcador;

  constructor(private service: WorldCupService) {}

  ngOnInit(): any {
    this.service.getFixtureDemo().subscribe(
      (partidos: any) => {
        partidos.response = partidos.response.slice(0, 1);
        partidos.response.forEach((res: any) => this.cambioImagenBandera(res.teams));
        this.partidos = partidos.response;
      },
      (e) => console.error(e)
    );
  }

  cambioImagenBandera(teams: any) {
    for (let i = 0; i < flags.length; i++) {
      if (flags[i].id === teams.home.id) teams.home.logo = flags[i].src;
      if (flags[i].id === teams.away.id) teams.away.logo = flags[i].src;
    }
  }
}
