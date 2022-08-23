import { Component, OnInit } from '@angular/core';
import { flags } from 'src/app/mocks/object-images.mocks';
import { SwiperOptions } from 'swiper';
import { WorldCupService } from '../../../services/world-cup.service';
import { swiperConfigTabla } from '../../../mocks/carousel-config.mocks';

@Component({
  selector: 'app-tabla-puntos',
  templateUrl: './tabla-puntos.component.html',
  styleUrls: ['./tabla-puntos.component.scss'],
  providers: [WorldCupService]
})
export class TablaPuntosComponent implements OnInit {
  tables = [];
  tablePointsOne: any = []; //GRUPOS A, B, C, D
  tablePointsTwo: any = []; //GRUPOS E, F, G, H
  swiperConfig: SwiperOptions = swiperConfigTabla;

  constructor(private service: WorldCupService) {}

  ngOnInit(): void {
    // this.service.getTable('equipos?league=1&season=2022').subscribe(
    //   (table) => {
    //     this.tablePoints = table.response;
    //     console.log(table);
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
      console.log(auxTables);

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
}
