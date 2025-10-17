import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconRegistryStorybookModule } from '../../../icon-registry';

export default {
  title: 'Patterns/Links',
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, IconRegistryStorybookModule],
    }),
  ],
  argTypes: {
    disabled: { control: 'boolean' },
    withIcon: {
      control: 'boolean',
      defaultValue: false,
    },
    iconPosition: {
      description: 'Icon position',
      control: 'select',
      defaultValue: 'before',
      options: ['before', 'after'],
    },
  },
} as Meta;

export const links: StoryObj = {
  render: ({ withIcon, iconPosition, disabled }) => ({
    props: { withIcon, iconPosition, disabled },
    template: `

      <div class="body-low-default">
        <br><br>

        <!-- PRIMARY -->
        <div class="usage"><code>&#64;include link-primary;</code></div>

        <div class="link-sheet primary" [class.mat-icon--before]="iconPosition === 'before'" [class.mat-icon--after]="iconPosition === 'after'">
          <a href="http://www.boeing.com" [class.disabled]="disabled"><span>Primary link</span> <mat-icon svgIcon="icon-link" *ngIf="withIcon"></mat-icon></a>
        </div>

        <br><br>

        <!-- PRIMARY (UNDERLINED) -->
        <div class="usage"><code>&#64;include link-primary-underlined;</code></div>

        <div class="link-sheet primary underlined" [class.mat-icon--before]="iconPosition === 'before'" [class.mat-icon--after]="iconPosition === 'after'">
          <a href="http://www.boeing.com" [class.disabled]="disabled"><span>Primary link (underlined)</span> <mat-icon svgIcon="icon-link" *ngIf="withIcon"></mat-icon></a>
        </div>

        <br><br>

        <!-- ACCENT -->
        <div class="usage"><code>&#64;include link-accent;</code></div>

        <div class="link-sheet accent" [class.mat-icon--before]="iconPosition === 'before'" [class.mat-icon--after]="iconPosition === 'after'">
          <a href="http://www.boeing.com" [class.disabled]="disabled"><span>Accent link</span> <mat-icon svgIcon="icon-link" *ngIf="withIcon"></mat-icon></a>
        </div>

        <br><br>

        <!-- ACCENT / VISITED -->
        <div class="usage"><code>&#64;include link-accent-visited;</code></div>

        <div class="link-sheet accent visited" [class.mat-icon--before]="iconPosition === 'before'" [class.mat-icon--after]="iconPosition === 'after'">
          <a href="http://www.boeing.com" [class.disabled]="disabled"><span>Accent link (with visited state)</span> <mat-icon svgIcon="icon-link" *ngIf="withIcon"></mat-icon></a>
        </div>

        <br><br>

        <!-- ACCENT / UNDERLINED -->
        <div class="usage"><code>&#64;include link-accent-underlined;</code></div>

        <div class="link-sheet accent underlined" [class.mat-icon--before]="iconPosition === 'before'" [class.mat-icon--after]="iconPosition === 'after'">
          <a href="http://www.boeing.com" [class.disabled]="disabled"><span>Accent link (underlined)</span> <mat-icon svgIcon="icon-link" *ngIf="withIcon"></mat-icon></a>
        </div>

        <br><br>

        <!-- ACCENT / UNDERLINED / VISITED -->
        <div class="usage"><code>&#64;include link-accent-underlined-visited;</code></div>

        <div class="link-sheet accent underlined visited" [class.mat-icon--before]="iconPosition === 'before'" [class.mat-icon--after]="iconPosition === 'after'">
          <a href="http://www.boeing.com" [class.disabled]="disabled"><span>Accent link (underlined, with visited state)</span> <mat-icon svgIcon="icon-link" *ngIf="withIcon"></mat-icon></a>
        </div>

      </div>
    `
  }),
  args: {
    disabled: false,
    withIcon: false,
    iconPosition: "before"
  },
  name: 'Links',
};
