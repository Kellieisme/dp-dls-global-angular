import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { ThemeToggleModule } from '@design/dls-global-angular/theme-toggle';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ThemeToggleModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {}
