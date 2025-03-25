import { Routes } from '@angular/router';
import { PulseGlowButtonComponent } from './components/pulse-glow-button/pulse-glow-button.component';
import { SlideBounceCardComponent } from './components/slide-bounce-card/slide-bounce-card.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';

export const routes: Routes = [
  {
    path: 'pulse',
    component: PulseGlowButtonComponent,
  },
  {
    path: 'slide',
    component: SlideBounceCardComponent,
  },
  {
    path: 'flip',
    component: FlipCardComponent,
  },
];
