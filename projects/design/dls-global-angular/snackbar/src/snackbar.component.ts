
import { Component, Inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { IconRegistryModule } from '@dasdigitalplatform/dls-global-angular/icon-registry';


/**
 * Snackbar is a service for displaying snack-bar notifications.
 */
@Component({
    selector: 'ba-snackbar',
    imports: [MatButtonModule, MatIconModule, IconRegistryModule],
    template: `
    <div class="ba-snackbar__content">
      <span class="ba-snackbar__message">{{ data.message }}</span>
      <div class="ba-snackbar__actions">
        @if (data.action) {
          <button
            color="accent"
            mat-button
            (click)="onAction()"
            >
            {{ data.action }}
          </button>
        }
        @if (data.showClose) {
          <button mat-icon-button (click)="onClose()">
            <mat-icon svgIcon="icon-close"></mat-icon>
          </button>
        }
      </div>
    </div>
    `,
    styles: [
        `
      .ba-snackbar__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .ba-snackbar__message {
        white-space: pre-line;
        padding-right: 16px;
      }
      .ba-snackbar__actions {
        display: flex;
        align-items: center;
        flex-shrink: 0;
      }
    `,
  ]
})
export class SnackbarComponent {

  /**
   * The text message to display in the snack bar
   *
   */
  @Input() message = '';

  /**
   * A label for the snackbar action.
   */
  @Input() action?: string;

  /**
   * How long to display the snackbar
   */
  @Input() duration?: number;

  /**
   * Snackbar button text
   */
  @Input() buttonText = '';

  /**
   * A boolean flag determining whether or not to display the close feature
   */
  @Input() showClose = true;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
  ) { }

  onAction() {
    this.snackBarRef.dismissWithAction();
  }

  onClose() {
    this.snackBarRef.dismiss();
  }
}
