import { Component, OnInit } from '@angular/core';
import { Away, Home, Match } from 'src/app/models/live-matches.model';
import { UtilsService } from 'src/app/services/utlis.service';
import { WorldCupService } from 'src/app/services/world-cup.service';
import { LiveMatches } from '../../../models/live-matches.model';

@Component({
  selector: 'app-proximos-partidos',
  templateUrl: './proximos-partidos.component.html',
  styleUrls: ['./proximos-partidos.component.scss']
})
export class ProximosPartidosComponent implements OnInit {
  proximosPartidos: Match[] = [];

  constructor(private service: WorldCupService, private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.service.getMockProximosPartidos('?league=1&next=4').subscribe(
      (res: LiveMatches) => {
        res.response = res.response.slice(0, 4);
        this.proximosPartidos = res.response;
      },
      (e) => console.error(e)
    );
  }

  getFlag(team: Home | Away) {
    return this.utilsService.cambioImagenBandera(team);
  }
}
