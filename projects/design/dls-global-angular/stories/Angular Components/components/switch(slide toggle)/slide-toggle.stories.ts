import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'COMPONENTS/Switch (Slide toggle)',
  decorators: [
    moduleMetadata({
      imports: [MatSlideToggleModule],
    }),
  ],
  argTypes: {
    color: {
      description: 'Color',
      control: 'select',
      defaultValue: '',
      table: {
        defaultValue: { summary: '' },
      },
      options: ['primary', 'accent', 'warn'],
    },
    labelPosition: {
      description: 'Label position',
      control: 'select',
      defaultValue: 'after',
      options: ['after', 'before'],
    },
    disabled: { control: 'boolean' },
  },
} as Meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

const SwitchTemplate: StoryObj = {
  args: {
    color: '',
    labelPosition: 'after',
    disabled: false,
  }
};

export const Default: StoryObj = {
  ...SwitchTemplate,
  render: ({ color, labelPosition, disabled }) => ({
    props: { color, labelPosition, disabled },
    template: `
      <p><mat-slide-toggle [color]="color" [labelPosition]="labelPosition" [disabled]="disabled">Label text</mat-slide-toggle></p>
      `,
  }),
  name: 'Default',
};



