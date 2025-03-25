import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vortex-reveal',
  imports: [CommonModule],
  templateUrl: './vortex-reveal.component.html',
  styleUrls: ['./vortex-reveal.component.css'],
  animations: [
    trigger('vortexSwirl', [
      transition(':enter', [
        animate(
          '1.5s ease-in',
          keyframes([
            style({
              transform:
                'translate(calc(var(--x-start)), calc(var(--y-start))) rotate(0deg)',
              opacity: 1,
              boxShadow: '0 0 10px var(--color)',
              offset: 0,
            }),
            style({
              transform: 'translate(0, 0) rotate(720deg)', // 2 full spins
              opacity: 0.5,
              boxShadow: '0 0 20px var(--color)',
              offset: 0.8,
            }),
            style({
              transform: 'translate(0, 0) rotate(900deg)',
              opacity: 0,
              boxShadow: '0 0 10px var(--color)',
              offset: 1,
            }),
          ])
        ),
      ]),
    ]),
    trigger('revealGlow', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate(
          '0.5s 1s ease-out',
          style({ opacity: 1, transform: 'scale(1)' })
        ), // Delayed reveal
      ]),
    ]),
  ],
})
export class VortexRevealComponent {
  @ViewChild('buttonRef', { static: true }) buttonRef!: ElementRef;
  particles: { id: number; xStart: string; yStart: string; color: string }[] =
    [];
  particleId = 0;
  isRevealed = false;

  triggerVortex() {
    if (this.isRevealed) return; // Prevent multiple triggers
    this.isRevealed = true;

    const count = 12; // Number of particles
    const button = this.buttonRef.nativeElement;
    const rect = button.getBoundingClientRect();
    const radius = Math.max(rect.width, rect.height) / 2; // Max radius from center

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 2 * Math.PI; // Evenly spaced angles
      const xStart = `${radius * Math.cos(angle)}px`;
      const yStart = `${radius * Math.sin(angle)}px`;
      const color = `hsl(${(i / count) * 360}, 80%, 60%)`; // Gradient of colors
      this.particles.push({ id: this.particleId++, xStart, yStart, color });
    }

    // Clean up after animation
    setTimeout(() => {
      this.particles = [];
      setTimeout(() => {
        this.isRevealed = false; // Reset for replay
      }, 500); // After reveal finishes
    }, 1500); // Matches vortex duration
  }
}
