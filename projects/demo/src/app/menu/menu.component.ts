import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'menu-page',
    imports: [MatMenuModule, MatDividerModule, MatButtonModule, MatIconModule, IconRegistryModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})

export class MenuPageComponent {
  title = 'Menu';
}
