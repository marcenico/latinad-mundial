import { Component, Input, OnInit } from '@angular/core';
import { IParticlesProps } from 'ng-particles';
import { particlesOptions } from 'src/app/mocks/particles.mocks';
import { Main } from 'tsparticles';
import { loadConfettiShape } from 'tsparticles-shape-confetti';

@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.scss']
})
export class ConfettiComponent implements OnInit {
  options: IParticlesProps = particlesOptions;

  ngOnInit(): void {}

  particlesInit(main: Main): void {
    loadConfettiShape(main);
  }
}
