import { Component, OnInit } from '@angular/core';
import { WorldCupService } from '../../../services/world-cup.service';
import { flags } from '../../../object-images/object-images.js';

@Component({
  selector: 'app-tabla-puntos',
  templateUrl: './tabla-puntos.component.html',
  styleUrls: ['./tabla-puntos.component.scss'],
  providers: [WorldCupService],
})
export class TablaPuntosComponent implements OnInit {
  tablePoints: any = [];

  constructor(private service: WorldCupService) {}

  ngOnInit(): void {
    // this.service.getTable('standings?league=1&season=2022').subscribe(
    //   (table) => {
    //     this.tablePoints = table.response;
    //     console.log(table);
    //   },
    //   (e) => console.error(e)
    // );
    this.service.getTableDemo().subscribe((table) => {
      this.tablePoints = table.response;
      console.log(table);
    });
  }
}
