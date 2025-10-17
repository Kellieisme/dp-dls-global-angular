import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { UserProfileComponent } from '../../../../user-profile';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute, RouterLink } from '@angular/router';

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
  title: 'COMPONENTS/User Profile',
  component: UserProfileComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        RouterLink,
        MatDividerModule,
        UserProfileComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }),
  ],
  argTypes: {
    userFirstName: {
    }
  },
} as Meta;

type Story = StoryObj;

export const ClickableImage: Story = {
  args: {
    firstName: 'Michael',
  },
  render: ({ firstName }) => ({
    props: { firstName },
    template: `
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
    `,
  }),
};

export const DisplayOnlyImage: Story = {
  args: {
    firstName: 'Michael',
  },
  render: ({ firstName }) => ({
    props: { firstName },
    template: `
        <ba-user-profile [userFirstName]="firstName" userAvatarSource="./assets/card-img-1.png"></ba-user-profile>
    `,
  }),
};

export const ClickableLetter: Story = {
  args: {
    firstName: 'Michael',
  },
  render: ({ firstName }) => ({
    props: { firstName },
    template: `
        <ba-user-profile clickable [userFirstName]="firstName" [matMenuTriggerFor]="menuUserLetter"></ba-user-profile>
        <mat-menu #menuUserLetter="matMenu">
        <button mat-menu-item class="user-info-menu-item">
            <ba-user-profile [userFirstName]="firstName"></ba-user-profile>
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
    `,
  }),
};

export const DisplayOnlyLetter: Story = {
  args: {
    firstName: 'Michael',
  },
  render: ({ firstName }) => ({
    props: { firstName },
    template: `
        <ba-user-profile [userFirstName]="firstName"></ba-user-profile>
    `,
  }),
};