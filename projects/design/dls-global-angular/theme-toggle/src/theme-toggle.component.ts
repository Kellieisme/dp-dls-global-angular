import { Component } from "@angular/core";
import { ThemeToggleService } from "./theme-toggle.service";
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';

/**
 * Angular component to switch the Theme.
 * Also developers can create their own components with the use of `ThemeToggleService`
 * @example
 * ```
 * <ba-theme-toggle></ba-theme-toggle>
 * ```
 */
@Component({
  selector: "ba-theme-toggle",
  imports: [MatIconButton, MatTooltip, MatIcon],
  templateUrl: "theme-toggle.component.html",
  styleUrls: ["theme-toggle.component.scss"]
})
export class ThemeToggleComponent {
  constructor(private themeToggleService: ThemeToggleService) { }

  toggle() {
    this.themeToggleService.toggleTheme();
  }
}
