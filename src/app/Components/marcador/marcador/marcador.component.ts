import { Component, OnInit } from '@angular/core';
import { WorldCupService } from '../../../services/world-cup.service';
@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.scss'],
  providers: [WorldCupService],
})
export class MarcadorComponent implements OnInit {
  title = 'latinad-mundial';
  partidos: any = [];
  constructor(private service: WorldCupService) {}

  ngOnInit(): any {
    this.service.getPartidoEnVivo('?live=all').subscribe(
      (partidos) => {
        this.partidos = partidos.response;
        console.log(partidos);
      },
      (e) => console.error(e)
    );
  }
}