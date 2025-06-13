import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
    selector: 'app-select',
    imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss'
})
export class SelectComponent {

}


