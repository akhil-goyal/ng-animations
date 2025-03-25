import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pulse-glow-button',
  imports: [CommonModule],
  templateUrl: './pulse-glow-button.component.html',
  styleUrls: ['./pulse-glow-button.component.css'],
  animations: [
    trigger('pulseGlow', [
      state(
        'inactive',
        style({
          transform: 'scale(1)',
          boxShadow: '0 0 5px rgba(0, 255, 255, 0.3)',
        })
      ),
      state(
        'active',
        style({
          transform: 'scale(1)', // Reset scale for keyframes to handle pulsing
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
        })
      ),
      transition('inactive <=> active', [
        animate(
          '1.5s ease-in-out',
          keyframes([
            style({
              transform: 'scale(1)',
              boxShadow: '0 0 5px rgba(0, 255, 255, 0.3)',
              offset: 0,
            }),
            style({
              transform: 'scale(1.1)',
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)',
              offset: 0.5,
            }),
            style({
              transform: 'scale(1)',
              boxShadow: '0 0 5px rgba(0, 255, 255, 0.3)',
              offset: 1,
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class PulseGlowButtonComponent {
  isActive = false;

  togglePulse() {
    this.isActive = !this.isActive;
  }
}
