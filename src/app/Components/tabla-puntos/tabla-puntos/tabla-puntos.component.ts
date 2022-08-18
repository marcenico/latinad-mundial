import { Component, OnInit } from '@angular/core';
import { flags } from 'src/app/object-images/object-images';
import { WorldCupService } from '../../../services/world-cup.service';

@Component({
  selector: 'app-tabla-puntos',
  templateUrl: './tabla-puntos.component.html',
  styleUrls: ['./tabla-puntos.component.scss'],
  providers: [WorldCupService]
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
  cambioImagenBandera(teams: any) {
    for (let i = 0; i < flags.length; i++) {
      if (flags[i].id === teams.home.id) teams.home.logo = flags[i].src;
      if (flags[i].id === teams.away.id) teams.away.logo = flags[i].src;
    }
  }

  cambioImagenBandera(teams: any) {
    for (let i = 0; i < flags.length; i++) {
      if (flags[i].id === teams.home.id) teams.home.logo = flags[i].src;
    }
  }
}
