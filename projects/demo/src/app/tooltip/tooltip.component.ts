import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'tooltip',
    imports: [MatTooltipModule, MatButtonModule, MatIconModule, IconRegistryModule],
    templateUrl: './tooltip.component.html',
    styleUrl: './tooltip.component.scss'
})

export class TooltipPageComponent {
  title = 'Tooltip';
}
