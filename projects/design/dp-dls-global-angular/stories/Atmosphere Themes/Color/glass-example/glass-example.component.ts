import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-glass-example',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './glass-example.component.html',
  styleUrl: './glass-example.component.scss'
})
export class GlassExampleComponent {
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

}
