import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'card-page',
    imports: [MatCardModule, MatButtonModule, RouterLink],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
}) 

export class CardPageComponent {
  title = 'Card';
}