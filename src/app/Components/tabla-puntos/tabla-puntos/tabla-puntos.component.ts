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
  tablePointsOne: any = [];
  tablePointsTwo: any = [];
  tablePointsThree: any = [];
  tablePointsFour: any = [];

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
      this.tablePointsOne = table?.[0].standings[0];
      this.tablePointsTwo = table?.[0].standings[1];
      this.tablePointsThree = table?.[0].standings[2];
      this.tablePointsFour = table?.[0].standings[3];
      console.log(table);
    });    
  }
}
