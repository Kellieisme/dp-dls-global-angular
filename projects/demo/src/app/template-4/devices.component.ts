import { Component } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { NewRecipientComponent } from "./new-device/new-recipient.component";
import { DeleteReasonComponent } from "./delete-reason/delete-reason.component";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-devices",
  templateUrl: "./devices.component.html",
  standalone: true,
  imports: [
    MatIcon,
    ReactiveFormsModule,
    MatButton,
    MatIconButton,
    MatDialogModule
],
})
export class DevicesComponent {

  constructor(public dialog: MatDialog) { }

  openCreateDialog() {
    const dialogRef = this.dialog.open(NewRecipientComponent, {
      maxWidth: "850px",
    });
  }

  // This is the Confirm Delete dialog
  openDeleteReason() {
    const dialogRef = this.dialog.open(DeleteReasonComponent, {
      width: "300px",
    });
  }

}
