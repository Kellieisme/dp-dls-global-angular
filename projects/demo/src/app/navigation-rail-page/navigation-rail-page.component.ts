import { Component } from '@angular/core';
import { NavigationRailComponent } from '../../../../design/dp-dls-global-angular/navigation-rail';
import { UserProfileComponent } from '../../../../design/dp-dls-global-angular/user-profile';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { IconRegistryModule } from '../../../../design/dp-dls-global-angular/icon-registry';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'navigation-rail-page',
    imports: [NavigationRailComponent, UserProfileComponent, MatMenuModule, MatDividerModule, IconRegistryModule, MatIconModule],
    templateUrl: './navigation-rail-page.component.html',
    styleUrl: './navigation-rail-page.component.scss'
})
export class NavigationRailPageComponent {

}
