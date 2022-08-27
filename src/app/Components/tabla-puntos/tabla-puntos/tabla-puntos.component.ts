import { Component, OnInit } from '@angular/core';
import { WorldCupService } from 'src/app/services/world-cup.service';
import { swiperConfigTabla } from 'src/assets/mocks/carousel-config.mocks';
import { flags } from 'src/assets/mocks/object-images.mocks';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-tabla-puntos',
  templateUrl: './tabla-puntos.component.html',
  styleUrls: ['./tabla-puntos.component.scss']
})
export class TablaPuntosComponent implements OnInit {
  swiperConfig: SwiperOptions = swiperConfigTabla;
  tables = [];
  grupos = [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H']
  ];
  constructor(private service: WorldCupService) {}

  ngOnInit(): void {
    // this.service.getTable('equipos?league=1&season=2022').subscribe(
    //   (table) => {
    //     this.tablePoints = table.response;
    //   },
    //   (e) => console.error(e)
    // );

    this.getMocks(); // Solo para desarrollo
  }

  getMocks() {
    this.service.getTableDemo().subscribe((tables: []) => {
      let auxTables = tables;
      auxTables.forEach((table: []) => {
        table.forEach((grupo: []) => {
          this.cambioImagenBandera(grupo);
        });
      });
      this.tables = auxTables;
    });
  }

  cambioImagenBandera(grupos: any) {
    grupos.forEach((grupo: any) => {
      for (let i = 0; i < flags.length; i++) {
        if (flags[i].id === grupo.team?.id) grupo.team.logo = flags[i].src;
      }
    });
  }

  nombreDeGrupo(indexTabla: number, indexGrupo: number) {
    let nombreGrupo = 'GRUPO ';
    nombreGrupo +=
      indexTabla === 0 ? `${this.grupos[indexTabla][indexGrupo]}` : `${this.grupos[indexTabla][indexGrupo]}`;
    return nombreGrupo;
  }
}
