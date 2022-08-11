import { Component, OnInit } from '@angular/core';
import { WorldCupService } from '../../../services/world-cup.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent implements OnInit {
  resultados: any = [];

  constructor(private service: WorldCupService) {}

  ngOnInit(): void {
    this.service.getEndpoint('?league=27&last=4').subscribe((resultados) => {
      this.resultados = resultados.response;
      console.log(resultados);
    });
  }
}
