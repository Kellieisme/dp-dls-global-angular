import { Component } from '@angular/core';
import { NavigationRailComponent } from '../../../../design/dp-dls-global-angular/navigation-rail';
import { UserProfileComponent } from '../../../../design/dp-dls-global-angular/user-profile';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { IconRegistryModule } from '../../../../design/dp-dls-global-angular/icon-registry';
import { MatIconModule } from '@angular/material/icon';
import { AtmosphereNavRailMenuItem } from '../../../../design/dp-dls-global-angular/navigation-rail';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'navigation-rail-page',
    imports: [NavigationRailComponent, UserProfileComponent, MatMenuModule, MatDividerModule, IconRegistryModule, MatIconModule, MatButtonModule],
    templateUrl: './navigation-rail-page.component.html',
    styleUrl: './navigation-rail-page.component.scss'
})
export class NavigationRailPageComponent {
  menuItems: AtmosphereNavRailMenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'home',
      route: '/dash',
      toggled: false,
    },
    {
      label: 'Navigation Rail',
      icon: 'menu',
      route: '/navigation-rail',
      toggled: true,
    },
    {
      label: 'Components',
      icon: 'widgets',
      route: '/components',
      toggled: false,
    },
    {
      label: 'Favorites',
      icon: 'favorite',
      route: '/favorites',
      toggled: false,
    },
  ];

}
