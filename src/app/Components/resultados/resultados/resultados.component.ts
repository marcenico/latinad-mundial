import { Component, OnInit } from '@angular/core';
import { WorldCupService } from '../../../services/world-cup.service';
import { environment } from '../../../../environments/environment';

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
      (partidos) => {
        this.resultados = partidos.response.slice(0, 4);
        console.log(partidos);
      },
      (e) => console.error(e)
    );
  }
}
