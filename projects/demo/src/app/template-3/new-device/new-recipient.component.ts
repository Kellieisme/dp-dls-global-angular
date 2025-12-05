import { Component } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-new-recipient',
    templateUrl: './new-recipient.component.html',
    standalone: true,
    imports: [MatIcon, MatIconButton, MatDialogModule, MatFormField, MatLabel, MatInput, MatSelect, MatOption, MatButton]
})
export class NewRecipientComponent {}
