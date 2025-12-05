import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

/**
 * User Profile Component
 * 
 * Displays user avatar or monogram initial. Supports three display modes:
 * - Display-only: 48x48px static avatar
 * - Display-only-small: 24x24px static avatar  
 * - Clickable: 40x40px interactive avatar with 32x32px inner content
 * 
 * Uses DLS foundation-ui tokens for theming and size-base tokens for dimensions.
 * 
 * @Input clickable - When true, renders in clickable/interactive mode
 * @Input small - When true, renders in small display-only mode
 * @Input userAvatarSource - URL/path to user image. Falls back to monogram if invalid
 * @Input userFirstName - Required. User's first name, used to generate monogram initial
 */
@Component({
    selector: 'ba-user-profile',
    imports: [
        MatTabsModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        CommonModule,
        IconRegistryModule
    ],
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    host: {
        'class': 'user-profile-host'
    }
})

export class UserProfileComponent {

  /**
   * Renders component in interactive/clickable mode (40x40px with 32x32px inner content)
   * Defaults to false (display-only mode at 48x48px)
   */
  @Input({ transform: coerceBooleanProperty }) clickable: boolean = false;

  /**
   * Renders component in small display-only mode (24x24px)
   * Only applicable when clickable is false
   */
  @Input({ transform: coerceBooleanProperty }) small: boolean = false;

  /**
   * URL or path to user avatar image
   * Falls back to monogram if absent or invalid (validates for image extensions or http URLs)
   */
  @Input() userAvatarSource: string = '';

  /**
   * User's first name - REQUIRED
   * Used to generate single-letter monogram when no valid image is provided
   */
  @Input({ required: true }) userFirstName!: string;


  /**
   * Validates if userAvatarSource contains a valid image URL or path
   * Checks for http/https URLs or common image file extensions
   */
  hasValidImageSource(): boolean {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'];
    return typeof this.userAvatarSource === 'string' &&
      (this.userAvatarSource.startsWith('http') || imageExtensions.some(ext => this.userAvatarSource.endsWith(ext)));
  }

  /**
   * Generates uppercase single-letter monogram from userFirstName
   */
  getMonogram(): string {
    return this.userFirstName.charAt(0).toUpperCase();
  }

  /**
   * Determines CSS class based on display mode
   * Priority: clickable > small > default
   */
  getProfileClass(): string {
    if (this.clickable) {
      return 'user-profile--clickable';
    } else if (this.small) {
      return 'user-profile--display-only-small';
    } else {
      return 'user-profile--display-only';
    }
  }

}
