import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

/** @title Timepicker integration with datepicker */

@Component({
  selector: 'app-time-picker',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTimepickerModule,
    MatDatepickerModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './time-picker.component.html',
  styleUrl: './time-picker.component.scss',
   providers: [provideNativeDateAdapter()],
})
export class TimePickerComponent {
  value!: Date;
}
