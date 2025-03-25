import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staggered-list',
  imports: [CommonModule],
  templateUrl: './staggered-list.component.html',
  styleUrls: ['./staggered-list.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        // Trigger on any change (add/remove)
        query(
          ':enter',
          [
            // Target entering elements
            style({ opacity: 0, transform: 'translateY(20px)' }), // Start below and invisible
            stagger('100ms', [
              // 100ms delay between each item
              animate(
                '500ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ), // Prevents errors if no items enter
        query(
          ':leave',
          [
            // Target leaving elements
            animate(
              '300ms ease-out',
              style({ opacity: 0, transform: 'translateY(-20px)' })
            ),
          ],
          { optional: true }
        ), // Prevents errors if no items leave
      ]),
    ]),
  ],
})
export class StaggeredListComponent {
  items: string[] = ['Learn Angular', 'Build Animations', 'Create Videos'];

  addItem() {
    this.items.push(`New Item ${this.items.length + 1}`);
  }

  removeItem() {
    if (this.items.length > 0) {
      this.items.pop();
    }
  }
}
