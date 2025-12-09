import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeToggleService } from '../../../design/dp-dls-global-angular/theme-toggle/src/theme-toggle.service';
import { Subscription } from 'rxjs';
import { MainNavComponent } from "./main-nav/main-nav.component";

@Component({
  selector: 'app-root',
    standalone: true,
    imports: [MainNavComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent  {

  private themeSubscription: Subscription = new Subscription;

  constructor(private themeToggleService: ThemeToggleService) {}

  // ngOnInit() {
  //   // Get the current theme when the component initializes
  //   this.currentTheme = this.themeToggleService.getCurrentTheme();

  //   // Subscribe to theme changes
  //   this.themeSubscription = this.themeToggleService.themeChanged$.subscribe((theme: any) => {
  //     this.currentTheme = theme;
  //     console.log('Theme changed to:', theme);
  //   });
  // }

  toggleTheme() {
    // Call the toggleTheme method from the service
    this.themeToggleService.toggleTheme();
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
