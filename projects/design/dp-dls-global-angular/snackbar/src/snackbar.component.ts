
import { Component, Inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {  MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

/**
 * Snackbar is a service for displaying snack-bar notifications.*/

@Component({
    selector: 'ba-snackbar',
    imports: [MatButtonModule, MatIconModule],
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
    standalone: true,
})
export class SnackbarComponent {
  /* The text message to display in the snack bar */
  @Input() message = '';

  /* A label for the snackbar action.  */
  @Input() action?: string;

  /* How long to display the snackbar  */
  @Input() duration?: number;

  /* Snackbar button text   */
  @Input() buttonText = '';

  /* A boolean flag determining whether or not to display the close feature */
  @Input() showClose = true;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
  ) {}

  onAction() {
    this.snackBarRef.dismissWithAction();
  }

  onClose() {
    this.snackBarRef.dismiss();
  }
}
