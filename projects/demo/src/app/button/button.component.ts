import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';


@Component({
    selector: 'button-page',
    imports: [
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatTooltipModule,
        IconRegistryModule,
    ],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonPageComponent {
  title = 'Button';
}
