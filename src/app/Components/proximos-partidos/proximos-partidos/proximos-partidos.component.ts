import { Component, OnInit } from '@angular/core';
import { WorldCupService } from '../../../services/world-cup.service';
import { flags } from 'src/app/mocks/object-images';

@Component({
  selector: 'app-proximos-partidos',
  templateUrl: './proximos-partidos.component.html',
  styleUrls: ['./proximos-partidos.component.scss'],
  providers: [WorldCupService]
})
export class ProximosPartidosComponent implements OnInit {
  proximosPartidos: any = [];

  constructor(private service: WorldCupService) {}

  ngOnInit(): void {
    // this.service.getEndpoint('?league=1&next=4').subscribe((resultados) => {
    //   this.resultados = resultados.response;
    //   console.log(resultados);
    // });
    this.service.getFixtureDemo().subscribe(
      (resultados: any) => {
        resultados.response = resultados.response.slice(0, 4);
        resultados.response.forEach((res: any) => this.cambioImagenBandera(res.teams));
        this.proximosPartidos = resultados.response;
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
