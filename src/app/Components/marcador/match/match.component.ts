import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Away, Goals, Home, LiveMatches, Match, Status } from 'src/app/models/live-matches.model';
import { UtilsService } from 'src/app/services/utlis.service';
import { WorldCupService } from 'src/app/services/world-cup.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['../marcador/marcador.component.scss']
})
export class MatchComponent implements OnInit {
  @Input() match: Match;
  @Input() slideIndex: number;
  public gameSeconds = '00';
  private gameMinutes = 0;
  private intervalSeconds: any;

  constructor(private worldCupService: WorldCupService, private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.checkMatchTime(this.match.fixture.status);
    this.startWatch();

    interval(2 * 1000 * 60) // 2 Minutos
      .pipe(mergeMap(() => this.worldCupService.getMockLiveMatches2(`?id=${this.match.fixture.id}`)))
      .subscribe(
        (res: LiveMatches) => {
          this.checkMatchTime(res.response[0].fixture.status);
          this.checkGoal(this.match.goals, res.response[0].goals);
          this.match = res.response[0];
        },
        (e) => console.error(e)
      );
  }

  ngOnDestroy(): void {
    this.stopWatch();
  }

  private startWatch() {
    this.intervalSeconds = setInterval(() => {
      this.gameSeconds = this.agregarCero(new Date().getSeconds().toString());
      this.gameMinutes = this.match.fixture.status.elapsed;

      if (this.gameSeconds === '59') {
        setTimeout(() => (this.gameMinutes += 1), 1000);
      }
    }, 1000);
  }

  getMinutes() {
    return this.agregarCero(this.gameMinutes.toString());
  }

  getFlag(team: Home | Away) {
    return this.utilsService.cambioImagenBandera(team);
  }

  getStatusShort() {
    return this.match.fixture.status.short;
  }

  private stopWatch() {
    clearInterval(this.intervalSeconds);
  }

  private agregarCero(value: string) {
    return value.length === 1 ? '0' + value : value;
  }

  private checkGoal(previousGoals: Goals, current: Goals) {
    if (JSON.stringify(previousGoals) === JSON.stringify(current)) return;

    this.worldCupService.thereIsAGoal({ isGoal: true, slideIndex: this.slideIndex });
  }

  private checkMatchTime(status: Status) {
    if (status.short === 'HT') {
      status.elapsed = 0;
    }

    if (status.short === '2H') {
      status.elapsed += 45;
    }
  }
}
