import { Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orbital-particles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orbital-particles.component.html',
  styleUrls: ['./orbital-particles.component.css'],
  animations: [
    trigger('orbitalGlow', [
      transition(':enter', [
        animate('2s ease-in-out', keyframes([
          style({ 
            transform: 'translate(0, 0) scale(1)', 
            opacity: 1, 
            boxShadow: '0 0 10px var(--color)', 
            offset: 0 
          }),
          style({ 
            transform: 'translate(calc(var(--radius) * cos(90deg)), calc(var(--radius) * sin(90deg))) scale(0.8)', 
            opacity: 0.7, 
            boxShadow: '0 0 15px var(--color)', 
            offset: 0.25 
          }),
          style({ 
            transform: 'translate(calc(var(--radius) * cos(180deg)), calc(var(--radius) * sin(180deg))) scale(0.6)', 
            opacity: 0.5, 
            boxShadow: '0 0 20px var(--color)', 
            offset: 0.5 
          }),
          style({ 
            transform: 'translate(calc(var(--radius) * cos(270deg)), calc(var(--radius) * sin(270deg))) scale(0.4)', 
            opacity: 0.3, 
            boxShadow: '0 0 15px var(--color)', 
            offset: 0.75 
          }),
          style({ 
            transform: 'translate(0, 0) scale(0)', 
            opacity: 0, 
            boxShadow: '0 0 10px var(--color)', 
            offset: 1 
          })
        ]))
      ])
    ])
  ]
})
export class OrbitalParticlesComponent {
  @ViewChild('buttonRef', { static: true }) buttonRef!: ElementRef;
  particles: { id: number; radius: string; color: string }[] = [];
  particleId = 0;

  triggerParticles() {
    const count = 8; // Number of particles

    for (let i = 0; i < count; i++) {
      const radius = `${Math.random() * 50 + 20}px`; // Random radius (20-70px)
      const color = `hsl(${Math.random() * 360}, 80%, 60%)`; // Random bright color
      this.particles.push({ id: this.particleId++, radius, color });
    }

    // Clean up after animation
    setTimeout(() => {
      this.particles.splice(0, count); // Remove this batch
    }, 2000); // Matches animation duration
  }
}