import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { WorldCupService } from './services/world-cup.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WorldCupService],
})
export class AppComponent implements OnInit {
  title = 'latinad-mundial';
  info: any = [];
  
  constructor(private service: WorldCupService) {}

  ngOnInit(): void {
    this.service.getFixture('?league=1&season=2022').subscribe(
      (info) => {
        this.info = info.response.league;
        console.log(info);
      },
      (e) => console.error(e)
    );
  }
}
