import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Team } from 'src/app/models/table.model';
import { WorldCupService } from 'src/app/services/world-cup.service';
import { mergeMap } from 'rxjs/operators';
import { UtilsService } from 'src/app/services/utlis.service';
import { ConfigLoaderService } from 'src/app/services/config-loader.service';

@Component({
  selector: 'app-tabla-puntos',
  templateUrl: './tabla-puntos.component.html',
  styleUrls: ['./tabla-puntos.component.scss', './tabla-puntos-portrait.component.scss', './tabla-puntos-landscape.component.scss']
})
export class TablaPuntosComponent implements OnInit {
  swiperConfig: any;
  tables: [][] = [];
  grupos = [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H']
  ];

  constructor(
    private service: WorldCupService,
    private utilsService: UtilsService,
    private configLoaderService: ConfigLoaderService
  ) {
    this.swiperConfig = this.configLoaderService.tablaPuntosSwiperConfig;
  }

  ngOnInit(): void {
    this.getTablePoints();
  }

  getTablePoints() {
    this.service.getTablePoints(`?league=${this.configLoaderService.league}&season=2022`).subscribe(
      (res) => {
        this.tables = res;
        this.getTablePointsInterval(6 * 1000 * 60 * 60); // 6 Horas
      },
      (e) => console.error(e)
    );
  }

  getTablePointsInterval(delay: number) {
    interval(delay)
      .pipe(mergeMap(() => this.service.getTablePoints(`?league=${this.configLoaderService.league}&season=2022`)))
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
