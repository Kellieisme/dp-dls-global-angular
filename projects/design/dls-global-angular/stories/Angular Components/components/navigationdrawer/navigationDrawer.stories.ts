import { Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NavigationDrawerComponent,
  MockSidebarMenuData,
  NavDrawerPresentationEnum
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

const basicTemplate = () =>
  ` 
    <ba-navigation-drawer
      [fixedOpen]="fixedOpen"
      [minifyOnCollapse]="minifyOnCollapse"
      [navDrawerPresentation]="navDrawerPresentation"
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
    opened: false,
    minifyOnCollapse: true,
    navDrawerPresentation: NavDrawerPresentationEnum.DEFAULT,
  },
  render: ({ navDrawerPresentation, opened, minifyOnCollapse, homeRoute }) => ({
    props: {
      navDrawerPresentation, opened,
      minifyOnCollapse, homeRoute
    },
    template: basicTemplate()
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
    navDrawerPresentation: NavDrawerPresentationEnum.STANDALONE,
  },
  render: ({ navDrawerPresentation, opened, minifyOnCollapse, homeRoute }) => ({
    props: { navDrawerPresentation, opened, minifyOnCollapse, homeRoute },
    template: basicTemplate()
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
    navDrawerPresentation: NavDrawerPresentationEnum.MODAL,
  },
  render: ({ navDrawerPresentation, opened, homeRoute }) => ({
    props: { navDrawerPresentation, opened, homeRoute },
    template: basicTemplate()
  }),
  name: 'Modal Presentation'
};

/**
 * Shows the Nav Drawer in a locked-open state
 */
export const Test: Story = {
  args: {
    ...baseArgs,
    opened: true,
    fixedOpen: true,
    navDrawerPresentation: NavDrawerPresentationEnum.DEFAULT,
  },
  render: ({ navDrawerPresentation, opened, fixedOpen, homeRoute }) => ({
    props: { navDrawerPresentation, opened, fixedOpen, homeRoute },
    template: basicTemplate()
  }),
  name: 'Fixed Open'
};