import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MatSidenavModule } from '@angular/material/sidenav';
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
<<<<<<< Updated upstream
  ` 
=======
  `
>>>>>>> Stashed changes
    <ba-navigation-drawer
      [fixedOpen]="fixedOpen"
      [minifyOnCollapse]="minifyOnCollapse"
      [navDrawerPresentation]="${type}"
      [navBarBottomComponent1] = "sideNavNotificationsButton"
      [navBarBottomComponent2] = "sideNavProfileButton"
      [appName]="'Boeing App'"
      [appLogo]="'boeing'"
      [opened]="opened"
      [homeRoute]="homeRoute"
     ></ba-navigation-drawer>

    <ng-template #sideNavNotificationsButton let-data="data">
      <button
        mat-icon-button
        [ngClass]="{
          'mat-mdc-icon-button--toggle-on': toggled === true
        }"
      >
        <mat-icon [svgIcon]="toggled ? svgIcon+'-filled' : 'icon-notifications'"></mat-icon>
      </button>
    </ng-template>

    <ng-template #sideNavProfileButton let-data="data">
      <ba-user-profile clickable userFirstName="William"></ba-user-profile>
    </ng-template>
  `

export default {
  title: 'COMPONENTS/Navigation Drawer',
  component: NavigationDrawerComponent,
  parameters: { layout: 'fullscreen' },
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NavigationDrawerComponent,
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
<<<<<<< Updated upstream
  render: ({ opened, minifyOnCollapse, homeRoute }) => ({
=======
  render: ({ opened, minifyOnCollapse, homeRoute }: { opened: boolean; minifyOnCollapse: boolean; homeRoute?: string }) => ({
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  render: ({ opened, minifyOnCollapse, homeRoute }) => ({
=======
  render: ({ opened, minifyOnCollapse, homeRoute }: { opened: boolean; minifyOnCollapse: boolean; homeRoute?: string }) => ({
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  render: ({ opened, fixedOpen, homeRoute, minifyOnCollapse }) => ({
=======
  render: ({ opened, fixedOpen, homeRoute, minifyOnCollapse }: { opened: boolean; fixedOpen: boolean; homeRoute?: string; minifyOnCollapse: boolean }) => ({
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  render: ({ opened, fixedOpen, homeRoute }) => ({
=======
  render: ({ opened, fixedOpen, homeRoute }: { opened: boolean; fixedOpen: boolean; homeRoute?: string }) => ({
>>>>>>> Stashed changes
    props: { opened, fixedOpen, homeRoute },
    template: basicTemplate('default')
  }),
  name: 'Fixed Open'
};
