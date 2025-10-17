
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-glass-examples',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './glass-examples.component.html',
  styleUrl: './glass-examples.component.scss'
})
export class GlassExamplesComponent {
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

}
