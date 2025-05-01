import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatRadioButton, MatRadioGroup, MatRadioModule } from '@angular/material/radio';

const basicTemplate = (args: { disabled: boolean }) => ({
  template: `
    <mat-radio-group aria-label="Select an option">
      <mat-radio-button value="1" [disabled]="disabled">Option 1</mat-radio-button><br>
      <mat-radio-button value="2" [disabled]="disabled">Option 2</mat-radio-button><br>
    </mat-radio-group>
  `,
  props: args,
});

export default {
  title: 'COMPONENTS/Radio Button',
  decorators: [
    moduleMetadata({
      imports: [MatRadioModule, MatRadioGroup, MatRadioButton],
    }),
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the radio buttons are disabled',
    },
  },
} as Meta<MatRadioGroup>;

export const Basic: StoryObj<MatRadioGroup> = {
  render: (args) => basicTemplate(args),
  args: {
    disabled: false,
  },
  name: 'Standard',
};
