import { Component } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-new-recipient',
    templateUrl: './new-recipient.component.html',
    standalone: true,
    imports: [MatIcon, MatIconButton, MatDialogTitle, MatDialogContent, MatFormField, MatLabel, MatInput, MatSelect, MatOption,  MatDialogActions, MatButton, MatDialogClose]
})
export class NewRecipientComponent {}
