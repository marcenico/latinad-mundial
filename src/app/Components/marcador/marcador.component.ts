import { Component, OnInit } from '@angular/core';
import { WorldCupService } from '../../services/world-cup.service';
@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  providers: [WorldCupService],
})
export class MarcadorComponent implements OnInit {
  title = 'latinad-mundial';
  info: any = [];
  
  constructor(private service: WorldCupService) {}

  ngOnInit(): any {
    this.service.getFixture('?league=1&season=2022').subscribe(
      (info) => {
        this.info = info.response;
        console.log(info);
      },
      (e) => console.error(e)
    );
  }
}