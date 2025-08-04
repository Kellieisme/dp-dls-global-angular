import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IconRegistryModule } from '@design/dls-global-angular/icon-registry';

@Component({
  selector: 'lib-switch-example',
  standalone: true,
  imports: [MatSlideToggleModule, MatIconModule, IconRegistryModule, CommonModule, FormsModule, MatButtonModule],
  templateUrl: './switch-example.component.html',
  styleUrl: './switch-example.component.scss'
})
export class SwitchExampleComponent {

  changeText: MatSlideToggleChange | undefined;
  toggleText: string = '';
  printText: Array<any> = [];
  requiredToggle: any;

  onToggleChange() {
    console.log('Toggle Changed:');
    this.toggleText = 'Toggle Changed';
  }

  onChange(event: MatSlideToggleChange) {
    console.log('Change Event Triggered:', event.source);
    this.changeText = event;
    this.printText.push([this.toggleText, this.changeText])
    console.log(this.printText);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
    } else {
      console.warn('Form is invalid');
    }
  }


}


@Component({
  selector: 'lib-switch-custom-icon-example',
  standalone: true,
  imports: [MatSlideToggleModule, MatIconModule, IconRegistryModule, CommonModule],
  templateUrl: './custom-icon-example.component.html',
  styleUrl: './switch-example.component.scss'
})
export class CustomIconSwitchExampleComponent {}
