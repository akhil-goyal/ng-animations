import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-bounce-card',
  imports: [CommonModule],
  templateUrl: './slide-bounce-card.component.html',
  styleUrls: ['./slide-bounce-card.component.css'],
  animations: [
    trigger('slideBounce', [
      state(
        'hidden',
        style({
          transform: 'translateX(-100%)', // Off-screen to the left
          opacity: 0,
        })
      ),
      state(
        'visible',
        style({
          transform: 'translateX(0)', // In position
          opacity: 1,
        })
      ),
      transition('hidden => visible', [
        animate(
          '0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
          style({
            transform: 'translateX(0)', // Slide in with a bounce
            opacity: 1,
          })
        ),
      ]),
      transition('visible => hidden', [
        animate(
          '0.5s ease-out',
          style({
            transform: 'translateX(-100%)', // Slide back out
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class SlideBounceCardComponent {
  isVisible = false;

  toggleCard() {
    this.isVisible = !this.isVisible;
  }
}
