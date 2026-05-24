import { Component } from "@angular/core";
import { ThemeToggleService } from "./theme-toggle.service";
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: "ba-theme-toggle",
  standalone: true,
  imports: [MatIconButton, MatTooltip, MatIcon],
  templateUrl: "theme-toggle.component.html",
  styleUrls: ["theme-toggle.component.scss"]
})
export class ThemeToggleComponent {
  constructor(private themeToggleService: ThemeToggleService) {}

  toggle() {
    this.themeToggleService.toggleTheme();
  }
}
