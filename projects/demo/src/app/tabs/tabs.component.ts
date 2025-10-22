import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'tabs',
    imports: [MatTabsModule, MatButtonModule, MatIconModule, IconRegistryModule],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss'
})

export class TabsPageComponent {
  title = 'Tabs';
  lotsOfTabs = new Array(20).fill(0).map((_, index) => `Tab ${index}`);
}
