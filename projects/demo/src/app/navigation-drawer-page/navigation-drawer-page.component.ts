import { Component } from '@angular/core';
import { NavigationDrawerComponent } from '../../../../design/dls-global-angular/navigation-drawer/src/navigation-drawer.component';
import { UserProfileComponent } from '../../../../design/dls-global-angular/user-profile/src/user-profile.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'navigation-drawer-page',
    imports: [NavigationDrawerComponent, UserProfileComponent, MatMenuModule, MatButtonModule, MatDividerModule, MatIconModule],
    templateUrl: './navigation-drawer-page.component.html',
    styleUrl: './navigation-drawer-page.component.scss'
})
export class NavigationDrawerPageComponent {
  toggled = false;

  handleRouteRequest(event: { route?: string; item?: any}){
    if(!event.route){
      console.log('Custom routing for: ', event.item);
    }
  }
}
