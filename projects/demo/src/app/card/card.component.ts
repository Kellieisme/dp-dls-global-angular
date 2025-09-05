import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
    selector: 'card-page',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})

export class CardPageComponent {
  title = 'Card';
}
