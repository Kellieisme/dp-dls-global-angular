import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { IconRegistryStorybookModule } from '../../../../icon-registry';
import {
  ActivatedRoute,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { MatListModule, MatNavList } from '@angular/material/list';
import { NavigationRailComponent, MockSideRailMenuData } from '../../../../navigation-rail';
import { UserProfileComponent } from '../../../../user-profile';

// Mock for ActivatedRoute
const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: () => 'test-id',
    },
  },
};

export default {
  title: 'COMPONENTS/Navigation Rail',
  component: NavigationRailComponent,
  parameters: { layout: 'fullscreen' },
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NavigationRailComponent,
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
  argTypes: {
    menuItems: { control: 'object' },
  },
} as Meta;

const navRailTemplate = `
  <ba-navigation-rail
    [hideLabels]="hideLabels"
    [wide]="wide"
    [appLogo]="appLogo"
    [homeRoute]="homeRoute"
    [menuItems]="menuItems"
    [navRailBottomComponent1] = "sideNavNotificationsButton"
    [navRailBottomComponent2] = "sideNavProfileButton"
    >
  </ba-navigation-rail>

  <ng-template #sideNavNotificationsButton let-data="data">
    <button mat-icon-button>
      <mat-icon svgIcon="icon-notifications"></mat-icon>
    </button>
  </ng-template>

  <ng-template #sideNavProfileButton let-data="data">
    <ba-user-profile clickable userFirstName="William"></ba-user-profile>
  </ng-template>
`;

type SidenavStory = StoryObj<NavigationRailComponent>;

const baseArgs = {
  appLogo: 'boeing-logomark',
  homeRoute: '/',
  menuItems: MockSideRailMenuData
};

export const Narrow: SidenavStory = {
  name: 'Narrow',
  args: {
    ...baseArgs,
    hideLabels: true
  },
  render: ({ hideLabels, wide, appLogo, menuItems, homeRoute }) => ({
    props: { hideLabels, wide, appLogo, menuItems, homeRoute },
    template: navRailTemplate
  }),
};

export const narrowWithLabel: SidenavStory = {
  name: 'Narrow with Label',
  args: {
    ...baseArgs,
  },
  render: ({ hideLabels, wide, appLogo, menuItems, homeRoute }) => ({
    props: { hideLabels, wide, appLogo, menuItems, homeRoute },
    template: navRailTemplate
  }),
};

export const wideWithLabel: SidenavStory = {
  name: 'Wide with Label',
  args: {
    ...baseArgs,
    wide: true
  },
  render: ({ hideLabels, wide, appLogo, menuItems, homeRoute }) => ({
    props: { hideLabels, wide, appLogo, menuItems, homeRoute },
    template: navRailTemplate
  }),
};