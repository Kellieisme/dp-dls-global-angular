import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BasicDialogComponent } from './dialog.component';

@Component({
  selector: 'app-dialog-page',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <button mat-button="outlined" color="primary" (click)="openDialog()">
      Open Dialog
    </button>
  `
})
export class DialogPageComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(BasicDialogComponent, {
      width: 'var(--dialog-width, 420px)',
    });
  }
}
