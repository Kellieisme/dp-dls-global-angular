import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconRegistryStorybookModule } from '../../../../icon-registry';

const meta: Meta = {
  title: 'COMPONENTS/Badge',
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        IconRegistryStorybookModule
      ],
    }),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'button', 'icon'],
      description: 'Element type to display badge on'
    },
    content: { control: 'text', description: 'Badge content' },
    size: { 
      control: 'select', 
      options: ['small', 'large'],
      description: 'Badge size'
    },
    position: { 
      control: 'select', 
      options: ['above after', 'above before', 'below after', 'below before'],
      description: 'Badge position'
    },
    overlap: { control: 'boolean', description: 'Whether badge overlaps its content' },
    hidden: { control: 'boolean', description: 'Hide/show badge' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
  args: {
    type: 'text',
    content: '8',
    size: 'large',
    position: 'above after',
    overlap: false,
    hidden: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj;

export const Badges: Story = {
  render: (args) => ({
    template: `
      <div style="padding: 20px;">
        <div *ngIf="type === 'text'">
          <span 
            [matBadge]="content" 
            [matBadgeSize]="size"
            [matBadgePosition]="position"
            [matBadgeOverlap]="overlap"
            [matBadgeHidden]="hidden"
            [matBadgeDisabled]="disabled">
            Text with a badge
          </span>
        </div>

        <div *ngIf="type === 'button'">
          <button matButton="filled"
            color="primary"
            [matBadge]="content" 
            [matBadgeSize]="size"
            [matBadgePosition]="position"
            [matBadgeOverlap]="overlap"
            [matBadgeHidden]="hidden"
            [disabled]="disabled">
            Button with badge
          </button>
        </div>

        <div *ngIf="type === 'icon'">
          <mat-icon 
            svgIcon="icon-notifications"
            [matBadge]="content" 
            [matBadgeSize]="size"
            [matBadgePosition]="position"
            [matBadgeOverlap]="overlap"
            [matBadgeHidden]="hidden">
          </mat-icon>
        </div>
      </div>
    `,
    props: args,
  }),
};
