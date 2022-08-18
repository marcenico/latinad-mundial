import { Component, OnInit } from '@angular/core';
import { WorldCupService } from '../../../services/world-cup.service';
import { environment } from '../../../../environments/environment';
import { flags } from 'src/app/object-images/object-images';
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
  providers: [WorldCupService],
})
export class ResultadosComponent implements OnInit {
  resultados: any = [];
  constructor(private service: WorldCupService) {}

  ngOnInit(): void {
    console.log(environment.timezone);

    // this.service.getEndpoint('?league=1&next=4').subscribe((resultados) => {
    //   this.resultados = resultados.response;
    //   console.log(resultados);
    // });
    this.service.getFixtureDemo().subscribe(
      (resultados: any) => {
        resultados.response = resultados.response.slice(0, 4);
        resultados.response.forEach((res: any) =>
          this.cambioImagenBandera(res.teams)
        );
        this.resultados = resultados.response;
        console.log(resultados);
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
