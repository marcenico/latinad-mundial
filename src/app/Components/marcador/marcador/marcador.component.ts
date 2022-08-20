import { Component, OnInit } from '@angular/core';
import { WorldCupService } from '../../../services/world-cup.service';
import { flags } from 'src/app/mocks/object-images';
@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.scss'],
  providers: [WorldCupService]
})
export class MarcadorComponent implements OnInit {
  title = 'latinad-mundial';
  partidos: any = [];
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
