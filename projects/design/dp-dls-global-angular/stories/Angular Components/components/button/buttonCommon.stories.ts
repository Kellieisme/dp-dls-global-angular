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
    color: {
      description: 'Color',
      control: 'select',
      defaultValue: 'primary',
      table: {
        defaultValue: { summary: 'primary' },
      },
      options: ['primary', 'accent', 'warn'],
    },
    disabled: { control: 'boolean' },
  },
} as Meta;

const getTemplate = (type: string): string => `
  <div style="background:var(--foundation-ui-background-low); padding: var(--size-spacing-m)">
    <button ${type} [disabled]="disabled" [color]="color">
      {{ text | titlecase }}
    </button>

    <button ${type} [disabled]="disabled" [color]="color">
      {{ text | titlecase }}
      <mat-icon svgIcon="icon-favorite"></mat-icon> 
    </button>

    <button ${type} [disabled]="disabled" [color]="color">
      {{ text | titlecase }}
      <mat-icon svgIcon="icon-favorite" iconPositionEnd></mat-icon>
    </button>
    
  </div>
  <style>
    button {
      margin: var(--size-spacing-xs);
    }
  </style>
`;

// what is the filled button for warn? Does the hover in filled icon button look okay?
const ButtonTemplate: StoryObj = {
  args: {
    color: 'primary',
    text: 'Click Me',
    disabled: false,
  },
};

export const Text: StoryObj = {
  ...ButtonTemplate,
  render: ({ color, text, disabled }) => ({
    props: { color, text, disabled },
    template: getTemplate('matButton'),
  }),
  name: 'Text',
};

export const Outlined: StoryObj = {
  ...ButtonTemplate,
  render: ({ color, text, disabled }) => ({
    props: { color, text, disabled },
    template: getTemplate('matButton="outlined"'),
  }),
  name: 'Outlined',
};

export const Filled: StoryObj = {
  ...ButtonTemplate,
  render: ({ color, text, disabled }) => ({
    props: { color, text, disabled },
    template: getTemplate('matButton="filled"'),
  }),
  name: 'Filled',
};

const ButtonIconTemplate: StoryObj = {
  args: {
    color: 'primary',
    disabled: false,
  },
  render: ({ color, disabled }) => ({
    props: { color, disabled },
    template: `
    <div style="background:var(--foundation-ui-background-low); padding: var(--size-spacing-m)">
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
};

export const IconButton: StoryObj = {
  ...ButtonIconTemplate,
  args: {
    ...ButtonIconTemplate.args,
  },
  name: 'Icon',
};
