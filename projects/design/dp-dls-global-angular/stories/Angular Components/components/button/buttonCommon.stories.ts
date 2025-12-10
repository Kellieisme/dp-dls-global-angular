import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconRegistryStorybookModule } from '../../../../icon-registry';
import { TitleCasePipe } from '@angular/common';

export default {
  title: 'COMPONENTS/Button',
  decorators: [
    moduleMetadata({
      imports: [
        MatButtonModule,
        MatIconModule,
        TitleCasePipe,
        IconRegistryStorybookModule,
      ],
      providers: [],
    }),
  ],
  argTypes: {
    variant: {
      description: 'Button variant',
      control: 'select',
      options: ['text', 'outlined', 'filled'],
      defaultValue: 'text',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    color: {
      description: 'Color',
      control: 'select',
      defaultValue: 'primary',
      table: {
        defaultValue: { summary: 'primary' },
      },
      options: ['primary', 'accent'],
    },
    disabled: { 
      description: 'Disabled state',
      control: 'boolean',
      defaultValue: false,
    },
    withIcon: {
      description: 'Include icon',
      control: 'select',
      options: ['none', 'leading', 'trailing'],
      defaultValue: 'none',
    },
  },
} as Meta;

const getButtonDirective = (variant: string): string => {
  switch (variant) {
    case 'outlined':
      return 'matButton="outlined"';
    case 'filled':
      return 'matButton="filled"';
    case 'text':
    default:
      return 'matButton';
  }
};

const getIconMarkup = (iconPosition: string): string => {
  if (iconPosition === 'leading') {
    return '<mat-icon svgIcon="icon-favorite"></mat-icon>';
  } else if (iconPosition === 'trailing') {
    return '<mat-icon svgIcon="icon-favorite" iconPositionEnd></mat-icon>';
  }
  return '';
};

export const Button: StoryObj = {
  args: {
    variant: 'text',
    color: 'primary',
    text: 'Click Me',
    disabled: false,
    withIcon: 'none',
  },
  render: ({ variant, color, text, disabled, withIcon }) => {
    const directive = getButtonDirective(variant);
    const iconMarkup = getIconMarkup(withIcon);
    
    return {
      props: { color, text, disabled },
      template: `
        <div style="background:var(--foundation-ui-background-low); padding: var(--foundation-spacing-m)">
          <button ${directive} [disabled]="disabled" [color]="color">
            ${withIcon === 'leading' ? iconMarkup : ''}
            {{ text | titlecase }}
            ${withIcon === 'trailing' ? iconMarkup : ''}
          </button>
        </div>
        <style>
          button {
            margin: var(--foundation-spacing-xs);
          }
        </style>
      `,
    };
  },
  name: 'Button',
};

export const IconButton: StoryObj = {
  argTypes: {
    color: {
      description: 'Color',
      control: 'select',
      options: ['primary', 'accent', 'warn'],
      defaultValue: 'primary',
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
      defaultValue: false,
    },
  },
  args: {
    color: 'primary',
    disabled: false,
  },
  render: ({ color, disabled }) => ({
    props: { color, disabled },
    template: `
    <div style="background:var(--foundation-ui-background-low); padding: var(--foundation-spacing-m)">
      <button 
        matIconButton
        [disabled]="disabled"
        [color]="color"
      >
        <mat-icon svgIcon="icon-favorite"></mat-icon>
      </button>
    </div>
    `,
  }),
  name: 'Icon Button',
};

// Legacy Material Directive Support
export const FlatButton: StoryObj = {
  args: {
    color: 'primary',
    text: 'Click Me',
    disabled: false,
  },
  render: ({ color, text, disabled }) => ({
    props: { color, text, disabled },
    template: `
      <div style="background:var(--foundation-ui-background-low); padding: var(--foundation-spacing-m)">
        <button mat-flat-button [disabled]="disabled" [color]="color">
          {{ text | titlecase }}
        </button>

        <button mat-flat-button [disabled]="disabled" [color]="color">
          <mat-icon svgIcon="icon-favorite"></mat-icon>
          {{ text | titlecase }}
        </button>

        <button mat-flat-button [disabled]="disabled" [color]="color">
          {{ text | titlecase }}
          <mat-icon svgIcon="icon-favorite" iconPositionEnd></mat-icon>
        </button>
      </div>
      <style>
        button {
          margin: var(--foundation-spacing-xs);
        }
      </style>
    `,
  }),
  name: 'Flat (Legacy)',
  parameters: {
    docs: {
      description: {
        story: 'Legacy `mat-flat-button` directive. Use `matButton="filled"` for new implementations.',
      },
    },
  },
};

export const StrokedButton: StoryObj = {
  args: {
    color: 'primary',
    text: 'Click Me',
    disabled: false,
  },
  render: ({ color, text, disabled }) => ({
    props: { color, text, disabled },
    template: `
      <div style="background:var(--foundation-ui-background-low); padding: var(--foundation-spacing-m)">
        <button mat-stroked-button [disabled]="disabled" [color]="color">
          {{ text | titlecase }}
        </button>

        <button mat-stroked-button [disabled]="disabled" [color]="color">
          <mat-icon svgIcon="icon-favorite"></mat-icon>
          {{ text | titlecase }}
        </button>

        <button mat-stroked-button [disabled]="disabled" [color]="color">
          {{ text | titlecase }}
          <mat-icon svgIcon="icon-favorite" iconPositionEnd></mat-icon>
        </button>
      </div>
      <style>
        button {
          margin: var(--foundation-spacing-xs);
        }
      </style>
    `,
  }),
  name: 'Stroked (Legacy)',
  parameters: {
    docs: {
      description: {
        story: 'Legacy `mat-stroked-button` directive. Use `matButton="outlined"` for new implementations.',
      },
    },
  },
};
