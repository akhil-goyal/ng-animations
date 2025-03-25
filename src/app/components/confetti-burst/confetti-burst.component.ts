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
  selector: 'app-confetti-burst',
  imports: [CommonModule],
  templateUrl: './confetti-burst.component.html',
  styleUrls: ['./confetti-burst.component.css'],
  animations: [
    trigger('confettiBurst', [
      transition(':enter', [
        animate(
          '1s ease-out',
          keyframes([
            style({
              transform: 'translate(0, 0) rotate(0deg)',
              opacity: 1,
              offset: 0,
            }),
            style({
              transform: 'translate(var(--x), var(--y)) rotate(var(--rotate))',
              opacity: 0.7,
              offset: 0.5,
            }),
            style({
              transform:
                'translate(var(--x), calc(var(--y) + 50px)) rotate(var(--rotate))',
              opacity: 0,
              offset: 1,
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class ConfettiBurstComponent {
  @ViewChild('buttonRef', { static: true }) buttonRef!: ElementRef;
  confettiPieces: {
    id: number;
    x: string;
    y: string;
    rotate: string;
    color: string;
  }[] = [];
  pieceId = 0;

  triggerConfetti() {
    const count = 20; // Number of confetti pieces
    const buttonRect = this.buttonRef.nativeElement.getBoundingClientRect();
    const buttonCenterX = buttonRect.width / 2; // Relative to container
    const buttonCenterY = buttonRect.height / 2;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * 2 * Math.PI; // Random angle in radians
      const distance = Math.random() * 100 + 50; // Random distance (50-150px)
      const x = `${buttonCenterX + Math.cos(angle) * distance}px`;
      const y = `${buttonCenterY + Math.sin(angle) * distance}px`;
      const rotate = `${(Math.random() - 0.5) * 360}deg`; // Random rotation
      const color = `hsl(${Math.random() * 360}, 70%, 50%)`; // Random color

      this.confettiPieces.push({ id: this.pieceId++, x, y, rotate, color });
    }

    // Clean up after animation
    setTimeout(() => {
      this.confettiPieces = [];
    }, 1000); // Matches animation duration
  }
}
