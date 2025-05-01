import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { IconRegistryStorybookModule } from '../../../../icon-registry';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'COMPONENTS/Text Area',
  decorators: [
    moduleMetadata({
      imports: [MatInputModule, MatFormFieldModule, MatIconModule, IconRegistryStorybookModule],
    }),
  ],
  argTypes: {},
} as Meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */


const basicTemplate = () =>
  ` <form>
      <mat-form-field floatLabel="always" [ngClass]="{'mat-form-field-invalid' : invalid}">
        <mat-label>{{labelText | titlecase}}</mat-label>
        <textarea matInput [placeholder]="placeholder" [disabled]="disabled"></textarea>
        <mat-hint *ngIf="hintTextLeft !== ''">{{ hintTextLeft }}</mat-hint>
        <mat-hint align="end" *ngIf="hintTextRight !== ''">{{ hintTextRight }}</mat-hint>
      </mat-form-field>
    </form>
  `

export const Basic: StoryObj = {
  args: {
    labelText: 'Leave a comment',
    placeholder: 'ex: It makes me feel...',
    hintTextLeft: 'Characters',
    hintTextRight: 'n/500',
    disabled: false,
    invalid: false,
  },
  render: ({ labelText, placeholder, hintTextLeft, hintTextRight, disabled, invalid }) => ({
    props: { labelText, placeholder, hintTextLeft, hintTextRight, disabled, invalid },
    template: basicTemplate(),
  }),
  name: 'Standard',
};
