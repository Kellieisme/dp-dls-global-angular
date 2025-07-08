import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { IconRegistryModule } from '@dasdigitalplatform/dls-global-angular/icon-registry';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { AtmosphereTopBarNavigationLinkArray } from './top-app-bar.types';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';


/* A top bar for an application. Aka "Toolbar". This component accepts an optional hamburger icon button. */

@Component({
    selector: 'ba-top-app-bar',
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

  /* To use the hamburger menu at all breakpoints, use the `hamburgerMenuOnly` flag. */

  @Input() topAppBarMenu: AtmosphereTopBarNavigationLinkArray = [];

}
