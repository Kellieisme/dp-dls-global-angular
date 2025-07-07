import { Component } from '@angular/core';
import { MatDialogModule, MatDialogActions,  MatDialogClose,  MatDialogContent,  MatDialogTitle} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { IconRegistryModule } from '@design/dls-global-angular/icon-registry';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-basic-dialog',
    imports: [
        MatDialogModule,
        MatDialogActions,
        MatIconModule,
        MatDialogContent,
        MatButtonModule,
        MatDialogClose,
        MatDialogTitle,
        IconRegistryModule,
    ],
    template: `
     <div class="d-flex align-items-end pt-3" style="padding-left: 24px;">
      <div>
        <mat-icon svgIcon="icon-warning"></mat-icon>
      </div>
      <div class="ms-auto me-3">
        <button mat-icon-button mat-dialog-close="true">
          <mat-icon svgIcon="icon-close"></mat-icon>
        </button>
      </div>
    </div>

    <h2 mat-dialog-title>Dialog Title</h2>

    <mat-dialog-content>
      <p>
        A dialog is a type of modal window that appears in front of app content
        to provide critical information, or prompt for a decision to be made.
      </p>
    </mat-dialog-content>

    <mat-dialog-actions>
      <button mat-stroked-button color="primary" mat-dialog-close>Cancel</button>
      <button mat-flat-button color="primary" cdkFocusInitial mat-dialog-close>Accept</button>
    </mat-dialog-actions>
  `,
    styleUrl: './dialog-page.component.scss'
})
export class BasicDialogComponent {}
