import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [MatCardModule, MatDivider],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss'
})
export class TypographyComponent {

}
