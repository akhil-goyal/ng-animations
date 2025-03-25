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
  selector: 'app-flip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css'],
  animations: [
    trigger('flipCard', [
      state(
        'front',
        style({
          transform: 'perspective(1000px) rotateY(0deg)',
        })
      ),
      state(
        'back',
        style({
          transform: 'perspective(1000px) rotateY(180deg)',
        })
      ),
      transition('front <=> back', [animate('0.6s ease-in-out')]),
    ]),
  ],
})
export class FlipCardComponent {
  isFlipped = false;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
