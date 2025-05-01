import { Component } from '@angular/core';
import { MatRadioButton, MatRadioGroup, MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [MatRadioButton, MatRadioGroup, MatRadioModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent {

}
