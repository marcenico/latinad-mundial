import { Component, OnInit } from '@angular/core';
import { WorldCupService } from '../../../services/world-cup.service';

@Component({
  selector: 'app-tabla-puntos',
  templateUrl: './tabla-puntos.component.html',
  styleUrls: ['./tabla-puntos.component.scss'],
  providers: [WorldCupService],
})
export class TablaPuntosComponent implements OnInit {
  tablaPuntos: any = [];

  constructor(private service: WorldCupService) {}

  ngOnInit(): void {
    this.service.getTable('standings?league=1&season=2022').subscribe(
      (table) => {
        this.tablaPuntos = table.response;
        console.log(table);
        
      },
      (e) => console.error(e)
    );
  }
}
