import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BasicDialogComponent } from './dialog.component';

@Component({
  selector: 'app-dialog-page',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <button mat-flat-button color="primary" (click)="openDialog()">
      Open Dialog
    </button>
  `,
  styleUrl: './dialog-page.component.scss'
})
export class DialogPageComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    // Get current theme from body class
    const currentTheme = document.body.classList.contains('theme-light') ? 'theme-light' : 'theme-dark';
    this.dialog.open(BasicDialogComponent, {
      panelClass: currentTheme
    });
  }
}
