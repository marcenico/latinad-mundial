import { Component, Input, OnInit } from '@angular/core';
import { IParticlesProps } from 'ng-particles';
import { Main } from 'tsparticles';
import { loadConfettiShape } from 'tsparticles-shape-confetti';

@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.scss']
})
export class ConfettiComponent implements OnInit {
  @Input() duracionConfetti = 0;
  mostrarConfetti = true;
  options: IParticlesProps = {
    fullScreen: {
      enable: true
    },
    particles: {
      color: {
        value: ['#116ABD', '#16886F0', '#2C4F70']
      },
      shape: {
        type: 'confetti'
      },
      opacity: {
        value: 1,
        animation: {
          enable: true,
          minimumValue: 0,
          speed: 1,
          startValue: 'max',
          destroy: 'min'
        }
      },
      size: {
        value: 15,
        random: {
          enable: true,
          minimumValue: 8
        }
      },
      life: {
        duration: {
          sync: true,
          value: 5
        },
        count: 1
      },
      move: {
        enable: true,
        gravity: {
          enable: true,
          acceleration: 20
        },
        speed: 20,
        decay: 0.05,
        direction: 'bottom',
        outModes: {
          default: 'destroy',
          top: 'none'
        }
      }
    },
    emitters: [
      {
        direction: 'bottom',
        rate: {
          delay: 0.1,
          quantity: 10
        },
        position: {
          x: 50,
          y: 0
        },
        size: {
          width: 100,
          height: 10
        }
      }
    ]
  };

  ngOnInit(): void {}

  particlesInit(main: Main): void {
    loadConfettiShape(main);
    if (this.duracionConfetti > 0) setTimeout(() => (this.mostrarConfetti = false), this.duracionConfetti * 1000);
  }
}
