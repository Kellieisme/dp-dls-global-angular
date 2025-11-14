import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'home-page',
    imports: [RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})

export class HomePageComponent {
  title = 'Home';
}
