import { Component, OnInit } from '@angular/core';
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
@Component({
    selector: 'app-delete-reason',
    templateUrl: './delete-reason.component.html',
    standalone: true,
    imports: [MatIcon, MatIconButton, MatDialogTitle, MatDialogContent, MatFormField, MatLabel, MatInput, MatDialogActions, MatButton, MatDialogClose]
})
export class DeleteReasonComponent {}
