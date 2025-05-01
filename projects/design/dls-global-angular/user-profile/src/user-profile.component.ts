import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { IconRegistryModule } from '@dasdigitalplatform/dls-global-angular/icon-registry';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

/**
 * The Atmosphere User Profile Component provides a means for an application to
 * display the currently logged-in user. It is configurable to use either an
 * image or a generic initial (similar in concept to MS Teams, Slack, etc.), and
 * is also configurable to be either clickable or static. In the clickable
 * presentation, a panel is opened allowing access to further controls such as
 * profile settings and logging out.
 *
 * At present, the component accepts three properties: the `clickable` flag,
 * a url/path for a user avatar image, and the user's first name. A possible
 * future state could condense the avatar image and first name inputs into a
 * single user object which could be used consistently between components.
 */
@Component({
  selector: 'ba-user-profile',
  standalone: true,
  imports: [
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
    IconRegistryModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent {

  /**
   * A flag denoting whether or not an instance of the User Profile component is
   * clickable or is static. When the `clickable` property is present, the
   * component will render in its actionable/clickable state.
   *
   */
  @Input({ transform: coerceBooleanProperty }) clickable: boolean = false;
  // I feel like there should be some way to infer ^this from the DOM. The
  // component contains the class `mat-mdc-menu-trigger` when it is set up to be
  // expandable. We should be able to use that directly, but I need to work out
  // the syntax.

  @Input({ transform: coerceBooleanProperty }) small: boolean = false;

  /**
   * A string for an image source to use in rendering the User Profile
   * component. If the string is either absent or fails a quick validation
   * check, then the component will default to the monogram presentation.
   */
  @Input() userAvatarSource: string = '';

  /**
   * We'll pass the logged-in user's first name, and let the component determine
   * the monogram from there.
   *
   * This input is REQUIRED.
   */
  @Input({ required: true }) userFirstName!: string;


  /**
   * Returns a boolean denoting whether or not the string supplied in the
   * `imageSource` input represents an image file or not.
   */
  hasValidImageSource(): boolean {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'];
    return typeof this.userAvatarSource === 'string' &&
      (this.userAvatarSource.startsWith('http') || imageExtensions.some(ext => this.userAvatarSource.endsWith(ext)));
  };

  /**
   * Returns a single-initial monogram based on the logged-in user's first name.
   * THe first name is passed into the component as the `userFirstName` input.
   */
  getMonogram(): string {
    return this.userFirstName.charAt(0).toUpperCase();
  }

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
