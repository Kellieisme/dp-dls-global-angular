import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavDrawerPresentationEnum, NavigationDrawerComponent } from '../../../../navigation-drawer';
import { NavigationRailComponent } from '../../../../navigation-rail';
import { TopAppBarComponent } from '../../../../top-app-bar';
import { UserProfileComponent } from '../../../../user-profile';
import { CommonModule } from '@angular/common';
import { IconRegistryStorybookModule } from '../../../../icon-registry';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatListModule, MatNavList } from '@angular/material/list';

// Mock for ActivatedRoute
const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: () => 'test-id',
    },
  },
};

export default {
  title: 'Patterns/Navigation',
  parameters: { layout: 'fullscreen' },
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NavigationDrawerComponent,
        NavigationRailComponent,
        TopAppBarComponent,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        IconRegistryStorybookModule,
        MatListModule,
        RouterModule,
        RouterOutlet,
        MatSidenavModule,
        RouterLink,
        MatNavList,
        MatMenuModule,
        UserProfileComponent
      ],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }),
  ],
  argTypes: {
    variant: {
      description: 'variant of the navdrawer',
      control: 'select',
      defaultValue: 'standard',
      table: {
        defaultValue: { summary: 'standard' },
      },
      options: ['standard', 'standalone', 'modal'],
    },
    appName: { control: 'text' },
    appLogo: { control: 'text' },
    sectionHeaderLabel: { control: 'text' },
    menuItems: { control: 'object' }
  },
} as Meta;

type Story = StoryObj;

const bottomIcons = `
<ng-template #sideNavNotificationsButton let-data="data">
  <button 
    matIconButton 
    [ngClass]="{
      'mat-mdc-icon-button--toggle-on': toggled === true
    }"
  >
    <mat-icon [svgIcon]="toggled ? svgIcon+'-filled' : 'icon-notifications'"></mat-icon>
  </button>
</ng-template>

<ng-template #sideNavProfileButton let-data="data">
<ba-user-profile clickable userFirstName="William" [matMenuTriggerFor]="menuUserLetter"></ba-user-profile>
  <mat-menu #menuUserLetter="matMenu">
    <button mat-menu-item class="user-info-menu-item">
        <ba-user-profile userFirstName="William"></ba-user-profile>
        <div class="user-info">
        <span class="user-name">William Boeing</span>
        <span class="additional-info">Additional info</span>
        </div>
    </button>
    <mat-divider></mat-divider>
    <button mat-menu-item>
        <span>Profile</span>
    </button>
    <button mat-menu-item>
        <span>Preferences</span>
    </button>
    <mat-divider></mat-divider>
    <button mat-menu-item>
        <mat-icon svgIcon="icon-question-mark">question-mark</mat-icon>
        <span>Help and tutorials</span>
    </button>
    <button mat-menu-item>
        <mat-icon svgIcon="icon-power-settings-new">power-settings-new</mat-icon>
        <span>Sign out</span>
    </button>
  </mat-menu>
</ng-template>
`;

const navRailTemplateWithoutLogo = `
  <ba-navigation-rail
    [hideLabels]="hideLabels"
    [wide]="wide"
    [menuItems]="menuItems"
    [navRailBottomComponent1] = "sideNavNotificationsButton"
    [navRailBottomComponent2] = "sideNavProfileButton"
    >
  </ba-navigation-rail>
  ${bottomIcons}
`;

const navRailTemplate = `
  <ba-navigation-rail
    [hideLabels]="hideLabels"
    [wide]="wide"
    [appLogo]="appLogo"
    [menuItems]="menuItems"
    [navRailBottomComponent1] = "sideNavNotificationsButton"
    [navRailBottomComponent2] = "sideNavProfileButton"
    >
  </ba-navigation-rail>
  ${bottomIcons}
`;
const navDrawerTemplate = `
<ba-navigation-drawer
  minifyOnCollapse
  [navDrawerPresentation]="navDrawerPresentation"
  [navBarBottomComponent1] = "sideNavNotificationsButton"
  [navBarBottomComponent2] = "sideNavProfileButton"
  [appName]="'Boeing App'"
  [appLogo]="'boeing-logomark'"
  opened
  ></ba-navigation-drawer>
  ${bottomIcons}
`;
const navDrawerandTopAppBarTemplate = `
<ba-top-app-bar    
  [appLogo]="'boeing-logomark'"
  [appName]="appName"
  isNavigationDrawer
>
  <div class="actions large-screen">
    <button matIconButton matTooltip="Primary" color="primary" aria-label="icon-button with a notifications icon">
      <mat-icon svgIcon="icon-notifications"></mat-icon>
    </button>
    <button matIconButton matTooltip="Primary" color="primary" aria-label="icon-button with a settings icon">
      <mat-icon svgIcon="icon-settings"></mat-icon>
    </button>
  </div>
  <div class="actions small-screen">
    <button matIconButton matTooltip="Primary" color="primary" [matMenuTriggerFor]="overflowMenu" aria-label="icon-button with a more vertical icon">
      <mat-icon svgIcon="icon-more-vert"></mat-icon>
    </button>
    <mat-menu #overflowMenu="matMenu">
      <button mat-menu-item>
        <mat-icon svgIcon="icon-notifications">Notifications</mat-icon>
        <span>Notifications</span>
      </button>
      <button mat-menu-item>
        <mat-icon svgIcon="icon-settings">Settings</mat-icon>
        <span>Settings</span>
      </button>
    </mat-menu>
  </div>
  <div class="divider-parent">
  <mat-divider
  [vertical]="true">
  </mat-divider>
  </div>
  <ba-user-profile clickable class="avatar" userFirstName="William" [matMenuTriggerFor]="menuUserLetter"></ba-user-profile>
  <mat-menu #menuUserLetter="matMenu">
    <button mat-menu-item class="user-info-menu-item">
        <ba-user-profile userFirstName="William"></ba-user-profile>
        <div class="user-info">
        <span class="user-name">William Boeing</span>
        <span class="additional-info">Additional info</span>
        </div>
    </button>
    <mat-divider></mat-divider>
    <button mat-menu-item>
        <span>Profile</span>
    </button>
    <button mat-menu-item>
        <span>Preferences</span>
    </button>
    <mat-divider></mat-divider>
    <button mat-menu-item>
        <mat-icon svgIcon="icon-question-mark">question-mark</mat-icon>
        <span>Help and tutorials</span>
    </button>
    <button mat-menu-item>
        <mat-icon svgIcon="icon-power-settings-new">power-settings-new</mat-icon>
        <span>Sign out</span>
    </button>
  </mat-menu>
</ba-top-app-bar>
<ba-navigation-drawer
  minifyOnCollapse
  [navDrawerPresentation]="navDrawerPresentation"
  [navBarBottomComponent1] = "sideNavNotificationsButton"
  [navBarBottomComponent2] = "sideNavProfileButton"
  [opened]="opened"
  ></ba-navigation-drawer>
  ${bottomIcons}
`;
const navRailandTopAppBarTemplate = `
<ba-top-app-bar    
  [appLogo]="'boeing-logomark'"
  [appName]="appName"
  isNavigationDrawer
>
  <div class="actions large-screen">
    <button matIconButton matTooltip="Primary" color="primary" aria-label="icon-button with a notifications icon">
      <mat-icon svgIcon="icon-notifications"></mat-icon>
    </button>
    <button matIconButton matTooltip="Primary" color="primary" aria-label="icon-button with a settings icon">
      <mat-icon svgIcon="icon-settings"></mat-icon>
    </button>
  </div>
  <div class="actions small-screen">
    <button matIconButton matTooltip="Primary" color="primary" [matMenuTriggerFor]="overflowMenu" aria-label="icon-button with a more vertical icon">
      <mat-icon svgIcon="icon-more-vert"></mat-icon>
    </button>
    <mat-menu #overflowMenu="matMenu">
      <button mat-menu-item>
        <mat-icon svgIcon="icon-notifications">Notifications</mat-icon>
        <span>Notifications</span>
      </button>
      <button mat-menu-item>
        <mat-icon svgIcon="icon-settings">Settings</mat-icon>
        <span>Settings</span>
      </button>
    </mat-menu>
  </div>
  <div class="divider-parent">
  <mat-divider
  [vertical]="true">
  </mat-divider>
  </div>
  <ba-user-profile clickable class="avatar" userFirstName="William" [matMenuTriggerFor]="menuUserLetter"></ba-user-profile>
  <mat-menu #menuUserLetter="matMenu">
    <button mat-menu-item class="user-info-menu-item">
        <ba-user-profile userFirstName="William"></ba-user-profile>
        <div class="user-info">
        <span class="user-name">William Boeing</span>
        <span class="additional-info">Additional info</span>
        </div>
    </button>
    <mat-divider></mat-divider>
    <button mat-menu-item>
        <span>Profile</span>
    </button>
    <button mat-menu-item>
        <span>Preferences</span>
    </button>
    <mat-divider></mat-divider>
    <button mat-menu-item>
        <mat-icon svgIcon="icon-question-mark">question-mark</mat-icon>
        <span>Help and tutorials</span>
    </button>
    <button mat-menu-item>
        <mat-icon svgIcon="icon-power-settings-new">power-settings-new</mat-icon>
        <span>Sign out</span>
    </button>
  </mat-menu>
</ba-top-app-bar>
${navRailTemplateWithoutLogo}
`;

const navRailAndDrawerTemplate = `
<div style="display: flex; height: 100vh; position: relative; overflow: hidden;">
  <ba-navigation-rail
    disableSidenavContent
    [hideLabels]="hideLabels"
    [wide]="wide"
    [appLogo]="appLogo"
    [menuItems]="menuItems"
    [navRailBottomComponent1] = "sideNavNotificationsButton"
    [navRailBottomComponent2] = "sideNavProfileButton"
    (itemClick)="onLevel1ItemClick($event)"
    >
  </ba-navigation-rail>
  ${bottomIcons}
  <mat-sidenav-container style="flex-grow: 1;">
    <mat-sidenav #level2Sidenav mode="over" position="start" [opened]="isSidenavOpen"
                 style="width: 360px; padding: var(--foundation-spacing-m);">
      <div class="section-header">
        <h6 class="section-header-label">
         Level 2 destination
        </h6>
      </div>
     
      <mat-nav-list class="level2-nav">
        <ng-container *ngFor="let level2Item of selectedLevel1Item?.children || []">
          <mat-list-item disableRipple (click)="onLevel2ItemClick(level2Item)"  style="background-color: transparent;">
            <div matListItemTitle class="section-label">
              {{ level2Item.label }} 
            </div>
            <mat-icon
            matListItemIcon
            *ngIf="level2Item.children"
            class="dropdown-icon"
            style="position: absolute;
            right: 16px;"
            [class.expanded]="level2Item.expanded"
            svgIcon="icon-arrow-drop-down"
          ></mat-icon>
          </mat-list-item>
          <mat-nav-list *ngIf="level2Item.children && level2Item.expanded" class="level3-nav" style="margin-left: 32px" >
            <mat-list-item disableRipple *ngFor="let level3Item of level2Item.children" (click)="onLevel3ItemClick(level3Item)" style="background-color: transparent;">
              <div matListItemTitle class="section-label">
                {{ level3Item.label }}
              </div>
            </mat-list-item>
          </mat-nav-list>
        </ng-container>
      </mat-nav-list>
    </mat-sidenav>

    <mat-sidenav-content><router-outlet></router-outlet></mat-sidenav-content>
  </mat-sidenav-container>
</div>
`;

const baseArgs = {
  appName: 'Boeing App',
  appLogo: 'boeing-logomark',
  opened: true,
  sectionHeaderLabel: 'Main navigation',
  menuItems: [
    {
      label: 'Level 1',
      route: '/level1',
      icon: 'apps',
      children: [
        {
          label: 'Level 2a destination',
          route: '/level2a',
          icon: 'apps',
          children: [
            { label: 'Level 3 destination', route: '/level3a', icon: 'apps' },
            { label: 'Level 3 destination', route: '/level3b', icon: 'apps' },
          ]
        },
        {
          label: 'Level 2b destination',
          route: '/level2b',
          icon: 'code'
        },
        {
          label: 'Level 2c destination',
          route: '/level2c',
          icon: 'books',
          children: [
            { label: 'Level 3 destination', icon: 'books', route: '/level3c' },
            { label: 'Level 3 destination', icon: 'books', route: '/level3d' },
          ]
        },
      ]
    },
    {
      label: 'Level 1',
      route: '/level1',
      icon: 'code',
      children: [
        {
          label: 'Level 2 destination',
          route: '/level2a',
          children: [
            { label: 'Level 3 destination', icon: 'code', route: '/level3a' },
            { label: 'Level 3 destination', icon: 'code', route: '/level3b' },
          ]
        },
        {
          label: 'Level 2 destination',
          route: '/level2b',
          icon: 'books'
        },
        {
          label: 'Level 2 destination',
          route: '/level2c',
          icon: 'apps',
          children: [
            { label: 'Level 3 destination', route: '/level3c', icon: 'apps' },
            { label: 'Level 3 destination', route: '/level3d', icon: 'apps' },
          ]
        },
      ]
    },
  ]
};

export const NavigationRail: Story = {
  name: 'Navigation Rail (1 level of depth)',
  args: {
    ...baseArgs,
  },
  render: (args) => ({
    props: args,
    template: navRailTemplate,
  }),
};

// Story definition
export const NavDrawerandTopAppBarTemplate: Story = {
  name: 'Navigation Drawer and Top App Bar',
  args: {
    ...baseArgs,
    navDrawerPresentation: 'default', // Adjust as necessary
    sideNavNotificationsButton: 'Notifications', // Adjust as necessary
    sideNavProfileButton: 'Profile', // Adjust as necessary
    bottomIcons: '', // Add any bottom icons if needed
  },
  render: (args) => ({
    props: args,
    template: navDrawerandTopAppBarTemplate,
  }),
};

export const NavigationRailandTopAppBar: Story = {
  name: 'Navigation Rail + Top App Bar (1 level of depth)',
  args: {
    ...baseArgs,
    variant: 'standard',
  },
  render: (args) => ({
    props: args,
    template: navRailandTopAppBarTemplate,
  }),
};

export const NavigationDrawer: Story = {
  name: 'Navigation Drawer (1-2 levels of depth)',
  args: {
    ...baseArgs,
    variant: 'standalone',
    navDrawerPresentation: NavDrawerPresentationEnum.STANDALONE,
  },
  render: (args) => ({
    props: args,
    template: navDrawerTemplate,
  }),
};

export const NavigationDrawerandTopAppBar: Story = {
  name: 'Navigation Drawer + Top App Bar (1-2 levels of depth)',
  args: {
    ...baseArgs,
    variant: 'modal',
  },
  render: (args) => ({
    props: args,
    template: `
<ba-top-app-bar    
  [appLogo]="'boeing-logomark'"
  [appName]="appName"
  isNavigationDrawer
  hamburgerMenuOnly
  (hamburgerMenuClick)="opened = !opened"
>
  <div class="actions large-screen">
    <button matIconButton matTooltip="Primary" color="primary" aria-label="icon-button with a notifications icon">
      <mat-icon svgIcon="icon-notifications"></mat-icon>
    </button>
    <button matIconButton matTooltip="Primary" color="primary" aria-label="icon-button with a settings icon">
      <mat-icon svgIcon="icon-settings"></mat-icon>
    </button>
  </div>
  <div class="actions small-screen">
    <button matIconButton matTooltip="Primary" color="primary" [matMenuTriggerFor]="overflowMenu" aria-label="icon-button with a more vertical icon">
      <mat-icon svgIcon="icon-more-vert"></mat-icon>
    </button>
    <mat-menu #overflowMenu="matMenu">
      <button mat-menu-item>
        <mat-icon svgIcon="icon-notifications">Notifications</mat-icon>
        <span>Notifications</span>
      </button>
      <button mat-menu-item>
        <mat-icon svgIcon="icon-settings">Settings</mat-icon>
        <span>Settings</span>
      </button>
    </mat-menu>
  </div>
  <div class="divider-parent">
  <mat-divider
  [vertical]="true">
  </mat-divider>
  </div>
  <ba-user-profile clickable class="avatar" userFirstName="William" [matMenuTriggerFor]="menuUserLetter"></ba-user-profile>
  <mat-menu #menuUserLetter="matMenu">
    <button mat-menu-item class="user-info-menu-item">
        <ba-user-profile userFirstName="William"></ba-user-profile>
        <div class="user-info">
        <span class="user-name">William Boeing</span>
        <span class="additional-info">Additional info</span>
        </div>
    </button>
    <mat-divider></mat-divider>
    <button mat-menu-item>
        <span>Profile</span>
    </button>
    <button mat-menu-item>
        <span>Preferences</span>
    </button>
    <mat-divider></mat-divider>
    <button mat-menu-item>
        <mat-icon svgIcon="icon-question-mark">question-mark</mat-icon>
        <span>Help and tutorials</span>
    </button>
    <button mat-menu-item>
        <mat-icon svgIcon="icon-power-settings-new">power-settings-new</mat-icon>
        <span>Sign out</span>
    </button>
  </mat-menu>
</ba-top-app-bar>
<ba-navigation-drawer
  [navDrawerPresentation]="navDrawerPresentation"
  [navBarBottomComponent1] = "sideNavNotificationsButton"
  [navBarBottomComponent2] = "sideNavProfileButton"
  [(opened)]="opened"
  ></ba-navigation-drawer>
  ${bottomIcons}
`
    ,
  }),
};

export const NavigationRailAndNavigtaionDrawer: Story = {
  name: 'Navigation Rail + Navigation Drawer (2-3 levels of depth)',
  args: {
    ...baseArgs,
    variant: 'narrowWithLabel',
    isSidenavOpen: false
  },
  render: (args) => ({
    props: {
      ...args,
      selectedLevel1Item: null,
      selectedItem: null,
      onLevel1ItemClick: function (item: any) {
        if (item.children && item.children.length > 0) {
          console.log('click');
          this['selectedLevel1Item'] = item;
          this['isSidenavOpen'] = true;
        } else {
          this['selectedLevel1Item'] = null;
          this['isSidenavOpen'] = false;
        }
      },
      onLevel2ItemClick: function (item: any) {
        if (item.children && item.children.length > 0) {
          item.expanded = !item.expanded;
        } else {
          this['selectedItem'] = item;
          console.log('Level 2 item clicked:', item);
        }
      },
      onLevel3ItemClick: function (item: any) {
        this['selectedItem'] = item;
        console.log('Level 3 item clicked:', item);
      }
    },
    template: navRailAndDrawerTemplate,
  }),
};
