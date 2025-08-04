import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
<<<<<<< Updated upstream
import {MatCardModule} from '@angular/material/card';
@Component({
    selector: 'card-page',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
=======
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'card-page',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
>>>>>>> Stashed changes
})

export class CardPageComponent {
  title = 'Card';
}
