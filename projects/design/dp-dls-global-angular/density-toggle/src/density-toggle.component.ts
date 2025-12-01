import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DensityToggleService } from './density-toggle.service';

@Component({
  selector: 'ba-density-toggle',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './density-toggle.component.html',
  styleUrls: ['./density-toggle.component.scss']
})
export class DensityToggleComponent {
  constructor(private densityToggleService: DensityToggleService) {}

  toggleDensity() {
    this.densityToggleService.toggleDensity();
  }
}
