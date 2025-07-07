import { Component } from "@angular/core";
import { ThemeToggleService } from "./theme-toggle.service";

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
    templateUrl: "theme-toggle.component.html",
    styleUrls: ["theme-toggle.component.scss"],
    standalone: false
})
export class ThemeToggleComponent {
  constructor(private themeToggleService: ThemeToggleService) {}

  toggle() {
    this.themeToggleService.toggleTheme();
  }
}
