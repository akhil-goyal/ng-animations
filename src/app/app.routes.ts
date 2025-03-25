import { Routes } from '@angular/router';
import { PulseGlowButtonComponent } from './components/pulse-glow-button/pulse-glow-button.component';
import { SlideBounceCardComponent } from './components/slide-bounce-card/slide-bounce-card.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { StaggeredListComponent } from './components/staggered-list/staggered-list.component';
import { ConfettiBurstComponent } from './components/confetti-burst/confetti-burst.component';
import { OrbitalParticlesComponent } from './components/orbital-particles/orbital-particles.component';
import { VortexRevealComponent } from './components/vortex-reveal/vortex-reveal.component';
import { AuroraFlowComponent } from './components/aurora-flow/aurora-flow.component';

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
  {
    path: 'list',
    component: StaggeredListComponent,
  },
  {
    path: 'confetti',
    component: ConfettiBurstComponent,
  },
  {
    path: 'orbital',
    component: OrbitalParticlesComponent,
  },
  {
    path: 'vortex',
    component: VortexRevealComponent,
  },
  {
    path: 'aurora',
    component: AuroraFlowComponent,
  },
];
