import { IParticlesProps } from 'ng-particles';

export const particlesOptions: IParticlesProps = {
  fullScreen: {
    enable: true
  },
  particles: {
    color: {
      value: ['#FFFFFF', '#2C4F70']
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
        quantity: 1
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
