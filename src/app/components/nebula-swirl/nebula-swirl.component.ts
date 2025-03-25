import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nebula-swirl',
  imports: [CommonModule],
  templateUrl: './nebula-swirl.component.html',
  styleUrls: ['./nebula-swirl.component.css'],
  animations: [
    trigger('particleSwirl', [
      transition(':enter', [
        animate(
          '6s ease-in',
          keyframes([
            style({
              transform:
                'translate(calc(var(--x-start)), calc(var(--y-start))) rotate(0deg)',
              opacity: 1,
              offset: 0,
            }),
            style({
              transform: 'translate(0, 0) rotate(1080deg)',
              opacity: 0.5,
              offset: 0.8,
            }), // 3 full spins
            style({
              transform: 'translate(0, 0) rotate(1440deg)',
              opacity: 0,
              offset: 1,
            }), // 4 spins total
          ])
        ),
      ]),
    ]),
    trigger('textGlow', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('2s ease-in', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
    trigger('glowPulse', [
      transition('* => *', [
        animate(
          '4s ease-in-out',
          keyframes([
            style({
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
              filter: 'hue-rotate(0deg)',
              offset: 0,
            }),
            style({
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
              filter: 'hue-rotate(180deg)',
              offset: 0.5,
            }),
            style({
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
              filter: 'hue-rotate(360deg)',
              offset: 1,
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class NebulaSwirlComponent {
  particles: { id: number; xStart: string; yStart: string; color: string }[] =
    [];

  ngOnInit() {
    this.generateParticles();
    setInterval(() => this.generateParticles(), 6000); // Regenerate every 6 seconds
  }

  generateParticles() {
    this.particles = [];
    const count = 15; // Number of particles
    const radius = 300; // Max radius from center

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 2 * Math.PI + (Math.random() - 0.5) * 0.5;
      const xStart = `${radius * Math.cos(angle)}px`;
      const yStart = `${radius * Math.sin(angle)}px`;
      const color = `hsl(${Math.random() * 360}, 80%, 80%)`; // Bright cosmic colors
      this.particles.push({ id: i, xStart, yStart, color });
    }
  }
}
