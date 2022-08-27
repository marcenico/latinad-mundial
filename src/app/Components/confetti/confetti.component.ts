import { Component, Input, OnInit } from '@angular/core';
import { IParticlesProps } from 'ng-particles';
import { particlesOptions } from 'src/assets/mocks/particles.mocks';
import { Main } from 'tsparticles';
import { loadConfettiShape } from 'tsparticles-shape-confetti';

@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.scss']
})
export class ConfettiComponent implements OnInit {
  @Input() duracionConfetti = 0;
  options: IParticlesProps = particlesOptions;

  ngOnInit(): void {}

  particlesInit(main: Main): void {
    loadConfettiShape(main);
  }
}
