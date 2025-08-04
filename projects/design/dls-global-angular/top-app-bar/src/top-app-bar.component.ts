import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
=======
import { IconRegistryModule } from '@design/dls-global-angular/icon-registry';
>>>>>>> Stashed changes
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { AtmosphereTopBarNavigationLinkArray } from './top-app-bar.types';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';


/* A top bar for an application. Aka "Toolbar". This component accepts an optional hamburger icon button. */

@Component({
<<<<<<< Updated upstream
    selector: 'ba-top-app-bar',
    imports: [
        MatTabsModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        CommonModule,
        RouterModule,
        MatDividerModule
    ],
    templateUrl: './top-app-bar.component.html',
    styleUrls: ['./top-app-bar.component.scss']
=======
  selector: 'ba-top-app-bar',
  standalone: true,
  imports: [
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
    IconRegistryModule,
    RouterModule,
    MatDividerModule
  ],
  templateUrl: './top-app-bar.component.html',
  styleUrls: ['./top-app-bar.component.scss']
>>>>>>> Stashed changes
})
export class TopAppBarComponent {

  /* THIS INPUT IS NOW OBSOLETE */

  @Input({ transform: coerceBooleanProperty }) menuAlignCenter: boolean = true;
  
  /* When `hamburgerMenuOnly` is present, the hamburger icon displays at all sizes.
   * If the flag is not present, the navigation will present a hamburger icon at smaller sizes. */

  @Input({ transform: coerceBooleanProperty }) hamburgerMenuOnly: boolean = false;

  /* The name of the application. */

  @Input() appName: string = 'App Name';

  /* A string reference to the application logo. If not passed = no logo displays */

  @Input() appLogo: string = '';

  /*Application home route added as a routerLink when clicking the logo */

  @Input() homeRoute: string = '/';

  /*Property to check whether Top App bar is in used with combination of navigation */
  @Input({ transform: coerceBooleanProperty }) isNavigationDrawer: boolean = false;

  /* To use the hamburger menu at all breakpoints, use the `hamburgerMenuOnly` flag. */
  
  @Input() topAppBarMenu: AtmosphereTopBarNavigationLinkArray = [];

  /* Output event for hamburger menu button click */
  @Output() hamburgerMenuClick = new EventEmitter<void>();

}
