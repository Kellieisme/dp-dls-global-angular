import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-input',
    imports: [MatInputModule, MatFormFieldModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss'
})
export class InputComponent {

}
