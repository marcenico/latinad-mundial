import { Component, OnInit } from '@angular/core';
import { Away, Home, LiveMatches, Match } from 'src/app/models/live-matches.model';
import { UtilsService } from 'src/app/services/utlis.service';
import { WorldCupService } from 'src/app/services/world-cup.service';
import { interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ConfigLoaderService } from 'src/app/services/config-loader.service';

@Component({
  selector: 'app-proximos-partidos',
  templateUrl: './proximos-partidos.component.html',
  styleUrls: ['./proximos-partidos.component.scss']
})
export class ProximosPartidosComponent implements OnInit {
  proximosPartidos: Match[] = [];

  constructor(
    private service: WorldCupService,
    private utilsService: UtilsService,
    private configLoaderService: ConfigLoaderService
  ) {}

  ngOnInit(): void {
    this.getProximosPartidos();
  }

  getProximosPartidos() {
    this.service.getMatches(`?league=${this.configLoaderService.league}&next=4`).subscribe(
      (res: LiveMatches) => {
        res.response = res.response.slice(0, 4);
        this.proximosPartidos = res.response;
        this.getProximosPartidosInterval(6 * 1000 * 60 * 60); // 6 Horas
      },
      (e) => console.error(e)
    );
  }

  getProximosPartidosInterval(delay: number) {
    interval(delay)
      .pipe(mergeMap(() => this.service.getMatches(`?league=${this.configLoaderService.league}&next=4`)))
      .subscribe(
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
