import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NavigationDrawerComponent,
  MockSidebarMenuData,
} from '../../../../navigation-drawer';
import { CommonModule } from '@angular/common';
import { IconRegistryStorybookModule } from '../../../../icon-registry';
import {
  ActivatedRoute,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { MatListModule, MatNavList } from '@angular/material/list';
import { UserProfileComponent } from '../../../../user-profile';

// Mock for ActivatedRoute
const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: () => 'test-id',
    },
  },
};

const basicTemplate = (type: string): string =>
  `
    <ba-navigation-drawer
      [fixedOpen]="fixedOpen"
      [minifyOnCollapse]="minifyOnCollapse"
      [navDrawerPresentation]="${type}"
      [navBarBottomComponent1] = "sideNavNotificationsButton"
      [navBarBottomComponent2] = "sideNavProfileButton"
      [appName]="'Boeing App'"
      [appLogo]="'boeing'"
      [(opened)]="opened"
      [homeRoute]="homeRoute"
     ></ba-navigation-drawer>

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
      <ba-user-profile clickable [userFirstName]="firstName" userAvatarSource="./assets/card-img-1.png" [matMenuTriggerFor]="menuUserImage"></ba-user-profile>
    <mat-menu #menuUserImage="matMenu">
      <button mat-menu-item class="user-info-menu-item">
        <ba-user-profile [userFirstName]="firstName" userAvatarSource="./assets/card-img-1.png"></ba-user-profile>
        <div class="user-info">
          <span class="user-name">{{ firstName }}</span>
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
      <mat-divider></mat-divider>
      <button mat-menu-item>
        <mat-icon svgIcon="icon-power-settings-new">power-settings-new</mat-icon>
        <span>Sign out</span>
      </button>
    </mat-menu>
    </ng-template>
  `

export default {
  title: 'COMPONENTS/Navigation Drawer',
  component: NavigationDrawerComponent,
  tags: ['!dev'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NavigationDrawerComponent,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule,
        IconRegistryStorybookModule,
        MatListModule,
        RouterModule,
        RouterOutlet,
        MatSidenavModule,
        RouterLink,
        MatNavList,
        UserProfileComponent
      ],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }),
  ],
} as Meta;

type Story = StoryObj<NavigationDrawerComponent>;

/**
 * Base arguments
 */
const baseArgs = {
  appName: 'Boeing App',
  appLogo: 'boeing',
  navDrawerMenuItems: MockSidebarMenuData,
};

/**
 * Shows the Nav Drawer in DEFAULT configuration
 */
export const Default: Story = {
  args: {
    ...baseArgs,
    opened: true,
    minifyOnCollapse: true,
  },
  render: ({ opened, minifyOnCollapse, homeRoute }: { opened: boolean; minifyOnCollapse: boolean; homeRoute?: string }) => ({
    props: {
      opened,
      minifyOnCollapse, homeRoute
    },
    template: basicTemplate('default')
  }),
  name: 'Standard Presentation'
};

/**
 * Shows the Nav Drawer in STANDALONE configuration
 */
export const Standalone: Story = {
  args: {
    ...baseArgs,
    opened: false,
    minifyOnCollapse: true,
  },
  render: ({ opened, minifyOnCollapse, homeRoute }: { opened: boolean; minifyOnCollapse: boolean; homeRoute?: string }) => ({
    props: { opened, minifyOnCollapse, homeRoute },
    template: basicTemplate('standalone')
  }),
  name: 'Standalone Presentation (With Branding)'
};

/**
 * Shows the Nav Drawer in MODAL configuration
 */
export const Modal: Story = {
  args: {
    ...baseArgs,
    opened: true,
    minifyOnCollapse: true,
    fixedOpen: false,
  },
  render: ({ opened, fixedOpen, homeRoute, minifyOnCollapse }: { opened: boolean; fixedOpen: boolean; homeRoute?: string; minifyOnCollapse: boolean }) => ({
    props: { opened, fixedOpen, homeRoute, minifyOnCollapse },
    template: basicTemplate('modal')
  }),
  name: 'Modal Presentation'
};

/**
 * Shows the Nav Drawer in a locked-open state
 */
export const FixedOpen: Story = {
  args: {
    ...baseArgs,
    opened: true,
    fixedOpen: true,
  },
  render: ({ opened, fixedOpen, homeRoute }: { opened: boolean; fixedOpen: boolean; homeRoute?: string }) => ({
    props: { opened, fixedOpen, homeRoute },
    template: basicTemplate('default')
  }),
  name: 'Fixed Open'
};
