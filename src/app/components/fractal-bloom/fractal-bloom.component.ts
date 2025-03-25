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
  selector: 'app-fractal-bloom',
  imports: [CommonModule],
  templateUrl: './fractal-bloom.component.html',
  styleUrls: ['./fractal-bloom.component.css'],
  animations: [
    trigger('particleDrift', [
      transition(':enter', [
        animate(
          '5s ease-out',
          keyframes([
            style({ transform: 'translate(0, 0)', opacity: 1, offset: 0 }),
            style({
              transform: 'translate(var(--x-end), var(--y-end))',
              opacity: 0.5,
              offset: 0.7,
            }),
            style({
              transform: 'translate(var(--x-end), var(--y-end))',
              opacity: 0,
              offset: 1,
            }),
          ])
        ),
      ]),
    ]),
    trigger('textBloom', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('2s ease-in', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
    trigger('prismGlow', [
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
export class FractalBloomComponent {
  particles: { id: number; xEnd: string; yEnd: string; color: string }[] = [];

  ngOnInit() {
    this.generateParticles();
    setInterval(() => this.generateParticles(), 5000); // Regenerate every 5 seconds
  }

  generateParticles() {
    this.particles = [];
    const count = 20; // Number of particles
    const radius = 400; // Max radius from center

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 2 * Math.PI + (Math.random() - 0.5) * 0.3;
      const distance = radius * (0.7 + Math.random() * 0.3); // Vary distance
      const xEnd = `${distance * Math.cos(angle)}px`;
      const yEnd = `${distance * Math.sin(angle)}px`;
      const color = `hsl(${Math.random() * 360}, 90%, 70%)`; // Bright colors
      this.particles.push({ id: i, xEnd, yEnd, color });
    }
  }
}
