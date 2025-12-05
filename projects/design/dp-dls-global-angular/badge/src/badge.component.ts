import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';

/**
 * Badge Component
 * 
 * A wrapper component for Material Design badges.
 * Badges are small status descriptors for UI elements.
 * 
 * Uses foundation tokens for styling and spacing.
 */
@Component({
  selector: 'ba-badge',
  standalone: true,
  imports: [MatBadgeModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
