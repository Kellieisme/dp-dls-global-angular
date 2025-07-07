import { Component, inject } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";
import { ScrollableDialogComponent } from './scrollable-dialog.component';
import { BasicDialogComponent } from './dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: "dialog-page",
    imports: [MatButton, MatTooltipModule],
    template: `
  <h6>Dialogs</h6>
  <div>
    <button mat-stroked-button color="primary" (click)="openBasicDialog()">Open This Dialog</button>
    <button mat-stroked-button color="primary" (click)="openScrollableDialog()">Open Scrollable Dialog</button>
  </div>
  `,
    styleUrl: './dialog-page.component.scss'
})

export class DialogPageComponent {
  #dialog = inject(MatDialog);

  openBasicDialog() {
    this.#dialog.open(BasicDialogComponent, {
      width: "350px"
    });
  }

  openScrollableDialog() {
    this.#dialog.open(ScrollableDialogComponent,{
      width: "500px"
    });
  }


}