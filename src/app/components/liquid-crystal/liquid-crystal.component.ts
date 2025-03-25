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
  selector: 'app-liquid-crystal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liquid-crystal.component.html',
  styleUrls: ['./liquid-crystal.component.css'],
  animations: [
    trigger('imageReveal', [
      transition(':enter', [
        style({ opacity: 0, filter: 'brightness(0.5) blur(5px)' }),
        animate(
          '2s ease-in',
          style({ opacity: 1, filter: 'brightness(1) blur(0px)' })
        ),
      ]),
    ]),
    trigger('crystalGlow', [
      transition('* => *', [
        animate(
          '4s ease-in-out',
          keyframes([
            style({ filter: 'brightness(1) contrast(1)', offset: 0 }),
            style({ filter: 'brightness(1.2) contrast(1.1)', offset: 0.5 }),
            style({ filter: 'brightness(1) contrast(1)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class LiquidCrystalComponent {
  imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }
}
