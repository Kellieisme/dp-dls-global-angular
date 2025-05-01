import { Component } from '@angular/core';
import { NavigationRailComponent } from '@dasdigitalplatform/dls-global-angular/navigation-rail';
import { UserProfileComponent } from '@dasdigitalplatform/dls-global-angular/user-profile';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { IconRegistryModule } from '@dasdigitalplatform/dls-global-angular/icon-registry';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'navigation-rail-page',
  standalone: true,
  imports: [NavigationRailComponent, UserProfileComponent, MatMenuModule, MatDividerModule, IconRegistryModule, MatIconModule],
  templateUrl: './navigation-rail-page.component.html',
  styleUrl: './navigation-rail-page.component.scss'
})
export class NavigationRailPageComponent {

}
