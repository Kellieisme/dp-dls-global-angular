import { Component } from '@angular/core';
import { NavigationDrawerComponent } from '@dasdigitalplatform/dls-global-angular/navigation-drawer';
import { UserProfileComponent } from '@dasdigitalplatform/dls-global-angular/user-profile';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { IconRegistryModule } from '@dasdigitalplatform/dls-global-angular/icon-registry';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'navigation-drawer-page',
    imports: [NavigationDrawerComponent, UserProfileComponent, MatMenuModule, MatButtonModule, MatDividerModule, IconRegistryModule, MatIconModule],
    templateUrl: './navigation-drawer-page.component.html',
    styleUrl: './navigation-drawer-page.component.scss'
})
export class NavigationDrawerPageComponent {
  toggled = false;
}
