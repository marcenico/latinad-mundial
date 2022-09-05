import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Away, Goals, Home, LiveMatches, Match, Status } from 'src/app/models/live-matches.model';
import { ConfigLoaderService } from 'src/app/services/config-loader.service';
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
  isGoalHome = false;
  isGoalAway = false;
  public gameSeconds = '00';
  private gameMinutes = 0;
  private isHalfTime = false;
  private intervalSeconds: any;

  constructor(
    private worldCupService: WorldCupService,
    private utilsService: UtilsService,
    private configLoaderService: ConfigLoaderService
  ) {}

  ngOnInit(): void {
    if (this.configLoaderService.useMundialMocks) return;
    this.checkMatchTime(this.match.fixture.status);
    this.startWatch();

    interval(1.5 * 1000 * 60) // 1.5 Minutos
      .pipe(mergeMap(() => this.worldCupService.getMatches(`?id=${this.match.fixture.id}`)))
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
      if (this.statusShort !== 'NS') {
        this.gameSeconds = this.agregarCero(new Date().getSeconds().toString());
        if (this.gameSeconds === '59') this.gameMinutes += 1;
      }
    }, 1000);
  }

  private stopWatch() {
    clearInterval(this.intervalSeconds);
  }

  private agregarCero(value: string) {
    return value.length === 1 ? '0' + value : value;
  }

  private checkGoal(previousGoals: Goals, current: Goals) {
    if (JSON.stringify(previousGoals) === JSON.stringify(current)) return;

    if (previousGoals.home < current.home) {
      setTimeout(() => (this.isGoalHome = true), 5.5 * 1000);
      setTimeout(() => (this.isGoalHome = false), 7.5 * 1000);
    }

    if (previousGoals.away < current.away) {
      setTimeout(() => (this.isGoalAway = true), 5.5 * 1000);
      setTimeout(() => (this.isGoalAway = false), 7.5 * 1000);
    }

    this.worldCupService.thereIsAGoal({ isGoal: true, slideIndex: this.slideIndex });
  }

  private checkMatchTime(status: Status) {
    if (status.short === 'HT') {
      if (this.isHalfTime === false) {
        this.gameMinutes = 0;
        this.isHalfTime = true;
      }
      return;
    }

    this.isHalfTime = false;

    if (status.short === 'FT') {
      status.elapsed = 0;
      this.stopWatch();
      return;
    }

    this.gameMinutes = status.elapsed ? status.elapsed : 0;
  }

  getFlag(team: Home | Away) {
    return this.utilsService.cambioImagenBandera(team);
  }

  get minutes() {
    if (this.statusShort === '1H' && this.match.fixture.status.elapsed === 45) {
      return '45';
    }

    if (this.statusShort === '2H' && this.match.fixture.status.elapsed === 90) {
      return '90';
    }

    return this.agregarCero(this.gameMinutes.toString());
  }

  get seconds() {
    if (
      (this.statusShort === '1H' && this.match.fixture.status.elapsed === 45) ||
      (this.statusShort === '2H' && this.match.fixture.status.elapsed === 90)
    ) {
      return '+';
    }
    return `:${this.gameSeconds}`;
  }

  get statusShort() {
    return this.match.fixture.status.short;
  }
}
