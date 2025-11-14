import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';
import { MatIconModule } from '@angular/material/icon';
import { ThemeToggleModule } from '@jeppesen-foreflight/dp-dls-global-angular/theme-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { UserProfileComponent } from '@jeppesen-foreflight/dp-dls-global-angular/user-profile';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationRailComponent } from '@jeppesen-foreflight/dp-dls-global-angular/navigation-rail';
import { TopAppBarComponent } from '@jeppesen-foreflight/dp-dls-global-angular/top-app-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

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
    ThemeToggleModule
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
    }
  ];

  isSidenavOpen = false;
  selectedLevel1Item?: string;

  constructor(private router: Router) {}
}
