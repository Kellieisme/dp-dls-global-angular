import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { IconRegistryModule } from '../../../../design/dp-dls-global-angular/icon-registry/src/icon-registry.module';
import { MatIconModule } from '@angular/material/icon';
import { ThemeToggleModule } from '../../../../design/dp-dls-global-angular/theme-toggle/src/theme-toggle.module';
import { DensityToggleModule } from '../../../../design/dp-dls-global-angular/density-toggle/src/density-toggle.module';
import { MatDividerModule } from '@angular/material/divider';
import { UserProfileComponent } from '../../../../design/dp-dls-global-angular/user-profile/src/user-profile.component';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationRailComponent } from '@jeppesen-foreflight/dp-dls-global-angular/navigation-rail';
import { TopAppBarComponent } from '../../../../design/dp-dls-global-angular/top-app-bar/src/top-app-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { Template2Component } from '../template-2/template-2.component';
import { Template3Component } from '../template-3/template-3.component';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [
    MatIconModule,
    IconRegistryModule,
    MatChipsModule,
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule,
    NavigationRailComponent,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    UserProfileComponent,
    TopAppBarComponent,
    ThemeToggleModule,
    DensityToggleModule
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './main-nav.component.html'
})
export class MainNavComponent {
  showDrawer: boolean = false;

  @ViewChild('sidenavContent', { read: ElementRef, static: false }) sidenavContent!: ElementRef;

  menuItems = [
    {
      label: 'Dashboard',
      icon: 'home',
      route: '/dash',
      toggled: false,
    },
    {
      label: 'Components',
      icon: 'favorite',
      route: '/components',
      toggled: false,
      // children: [
      //   {
      //     label: 'Badge',
      //     route: '/components/badge'
      //   },
      //   {
      //     label: 'Button',
      //     route: '/components/button',
      //   },
      //   {
      //     label: 'Breadcrumb',
      //     route: '/components//breadcrumb',
      //   },
      //   {
      //     label: 'Card',
      //     route: '/components//cards',
      //   },
      //   {
      //     label: 'Checkbox',
      //     route: '/components//checkbox',
      //   },
      //   {
      //     label: 'Chip',
      //     route: '/components//chip',
      //   },
      //   {
      //     label: 'Date picker',
      //     route: '/components//date-picker',
      //   },
      //   {
      //     label: 'Dialog',
      //     route: '/components//dialog',
      //   },
      //   {
      //     label: 'Drag & drop',
      //     route: '/components/drag-n-drop',
      //   },
      //   {
      //     label: 'Form',
      //     route: '/components//form',
      //   },
      //   {
      //     label: 'Input',
      //     route: '/components//input',
      //   },
      //   {
      //     label: 'Menu',
      //     route: '/components//menu',
      //   },
      //   {
      //     label: 'Select',
      //     route: '/components//select',
      //   },
      //   {
      //     label: 'Side sheet',
      //     route: '/components//sidesheet',
      //   },
      //   {
      //     label: 'Slide Toggle/Switch',
      //     route: '/components//switch',
      //   },
      //   {
      //     label: 'Snackbar',
      //     route: '/components//snackbar',
      //   },
      //   {
      //     label: 'Table',
      //     route: '/components//table',
      //   },
      //   {
      //     label: 'Tree',
      //     route: '/components//tree',
      //   }
      // ]
    },
    {
      label: 'Glass',
      icon: 'verified',
      route: '/glass',
    },
    {
      label: 'Typography',
      icon: 'type-specimen',
      route: '/typography',
    },
    { label: 'template-2',
      icon: 'verified',
      route: '/template-2',
    },
      { 
        label: 'template-3',
        icon: 'verified',
        route: '/template-3',
      }
  ];

  isSidenavOpen = false;
  selectedLevel1Item?: string;

  constructor(private router: Router) {}
}
