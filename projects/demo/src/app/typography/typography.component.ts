import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss'
})
export class TypographyComponent {

}
