import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-progress-indicator',
    imports: [MatProgressBarModule, MatProgressSpinnerModule],
    templateUrl: './progress-indicator.component.html',
    styleUrl: './progress-indicator.component.scss'
})
export class ProgressIndicatorComponent {

  public determinateBarValue = 40;
  public determinateSpinnerValue = 40;

}
