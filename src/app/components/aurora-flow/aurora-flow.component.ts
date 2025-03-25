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
  selector: 'app-aurora-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aurora-flow.component.html',
  styleUrls: ['./aurora-flow.component.css'],
  animations: [
    trigger('imageReveal', [
      transition(':enter', [
        style({ opacity: 0, filter: 'blur(10px)' }),
        animate('2s ease-in', style({ opacity: 1, filter: 'blur(0px)' })),
      ]),
    ]),
    trigger('glowPulse', [
      transition('* => *', [
        animate(
          '3s ease-in-out',
          keyframes([
            style({
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
              offset: 0,
            }),
            style({
              boxShadow: '0 0 40px rgba(255, 255, 255, 0.8)',
              offset: 0.5,
            }),
            style({
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
              offset: 1,
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class AuroraFlowComponent {
  imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }
}
