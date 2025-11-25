import { Component, inject } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";
import { BasicDialogComponent } from './dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: "dialog-page",
    imports: [MatButton, MatTooltipModule],
    template: `
  <h6>Dialogs</h6>
  <div>
    <button matButton="outlined" color="primary" (click)="openBasicDialog()">Open Dialog</button>
  </div>
  `,
    styleUrl: './dialog-page.component.scss'
})

export class DialogPageComponent {
  #dialog = inject(MatDialog);

  openBasicDialog() {
    this.#dialog.open(BasicDialogComponent, {
      width: "var(--dialog-width, 400px)"
    });
  }
}