import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TopAppBarComponent } from '../../../../top-app-bar';
import { UserProfileComponent } from '../../../../user-profile';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { IconRegistryStorybookModule } from '../../../../icon-registry';

// Mock for ActivatedRoute
const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: () => 'test-id'
    }
  }
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'COMPONENTS/Top App Bar',
  component: TopAppBarComponent,
  parameters: { layout: 'fullscreen' },
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        MatIcon,
        RouterLink,
        UserProfileComponent,
        TopAppBarComponent,
        IconRegistryStorybookModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }),
  ],
} as Meta;

type Story = StoryObj<TopAppBarComponent>;

export const Default: Story = {
  args: {
    appLogo: 'boeing-logomark',
    appName: 'App Name',
    homeRoute: '/'
  },
  render: (args) => ({
    props: args,
    template: `
      <ba-top-app-bar
        [appLogo]="appLogo"
        [appName]="appName"
        [homeRoute]="homeRoute"
      >
        <div class="actions large-screen">
          <button mat-icon-button matTooltip="Primary" color="primary" aria-label="icon-button with a notifications icon">
            <mat-icon svgIcon="icon-notifications"></mat-icon>
          </button>
          <button mat-icon-button matTooltip="Primary" color="primary" aria-label="icon-button with a settings icon">
            <mat-icon svgIcon="icon-settings"></mat-icon>
          </button>
        </div>
        <div class="actions small-screen">
          <button mat-icon-button matTooltip="Primary" color="primary" [matMenuTriggerFor]="overflowMenu" aria-label="icon-button with a more vertical icon">
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
    `,
  }),
  name: 'Standard',
};


export const HamburgerOnly: Story = {
  args: {
    appLogo: 'boeing-logomark',
    appName: 'App Name',
    topAppBarMenu: [
      { label: 'Home', path: './' },
      { label: 'Level 1', path: './level-1' },
      { label: 'Level 2', path: './level-1/level-2' },
      { label: 'Level 3', path: './level-1/level-2/level-3' }
    ],
  },
  render: (args) => ({
    props: args,
    template: `
      <ba-top-app-bar
        withMenu
        hamburgerMenuOnly
        [appLogo]="appLogo"
        [appName]="appName"
        [homeRoute]="homeRoute"
        (hamburgerMenuClick)="console.log('Hamburger Menu is working')"
      >
        <div class="actions large-screen">
          <button mat-icon-button matTooltip="Primary" color="primary" aria-label="icon-button with a help icon">
            <mat-icon svgIcon="icon-help"></mat-icon>
          </button>
          <button mat-icon-button matTooltip="Primary" color="primary" aria-label="icon-button with a notifications icon">
            <mat-icon svgIcon="icon-notifications"></mat-icon>
          </button>
          <button mat-icon-button matTooltip="Primary" color="primary" aria-label="icon-button with a settings icon">
            <mat-icon svgIcon="icon-settings"></mat-icon>
          </button>
        </div>
        <div class="actions small-screen">
          <button mat-icon-button matTooltip="Primary" color="primary" [matMenuTriggerFor]="overflowMenu" aria-label="icon-button with a more vertical icon">
            <mat-icon svgIcon="icon-more-vert"></mat-icon>
          </button>
          <mat-menu #overflowMenu="matMenu">
            <button mat-menu-item>
              <mat-icon svgIcon="icon-help">Help</mat-icon>
              <span>Help</span>
            </button>
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
    `,
  }),
  name: 'With hamburger button',
};