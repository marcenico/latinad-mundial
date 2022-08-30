import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Team } from 'src/app/models/table.model';
import { WorldCupService } from 'src/app/services/world-cup.service';
import { swiperConfigTabla } from 'src/assets/mocks/carousel-config.mocks';
import { SwiperOptions } from 'swiper';
import { UtilsService } from '../../../services/utlis.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-tabla-puntos',
  templateUrl: './tabla-puntos.component.html',
  styleUrls: ['./tabla-puntos.component.scss']
})
export class TablaPuntosComponent implements OnInit {
  swiperConfig: SwiperOptions = swiperConfigTabla;
  tables: [][] = [];
  grupos = [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H']
  ];
  constructor(private service: WorldCupService, private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.getTablePoints();
    this.getTablePointsInterval(6 * 1000 * 60 * 60); // 6 Horas
  }

  getTablePoints() {
    this.service.getMockTablePoints('?league=1&season=2022').subscribe(
      (res) => {
        this.tables = res;
      },
      (e) => console.error(e)
    );
  }

  getTablePointsInterval(delay: number) {
    interval(delay)
      .pipe(mergeMap(() => this.service.getMockTablePoints('?league=1&season=2022')))
      .subscribe(
        (res) => {
          this.tables = res;
        },
        (e) => console.error(e)
      );
  }

  nombreDeGrupo(indexTabla: number, indexGrupo: number) {
    let nombreGrupo = 'GRUPO ';
    nombreGrupo +=
      indexTabla === 0 ? `${this.grupos[indexTabla][indexGrupo]}` : `${this.grupos[indexTabla][indexGrupo]}`;
    return nombreGrupo;
  }

  getFlag(team: Team) {
    return this.utilsService.cambioImagenBandera(team);
  }
}
