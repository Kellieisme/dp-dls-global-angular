import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const basicTemplate = `
    <form>
      <mat-form-field [ngClass]="{'mat-form-field-invalid': invalid}">
        <mat-label>Selected Option</mat-label>
        <mat-select [disabled]="disabled" [ngClass]="{'mat-mdc-select-invalid': invalid}">
          <mat-option value="1">Option 1</mat-option>
          <mat-option value="2">Option 2</mat-option>
          <mat-option value="3">Option 3</mat-option>
          <mat-option value="4">Option 4</mat-option>
        </mat-select>
        <mat-hint>Supporting text</mat-hint>
      </mat-form-field>
    </form>
  `;

export default {
  title: 'COMPONENTS/Select',
  decorators: [
    moduleMetadata({
      imports: [MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the select is in an invalid state',
    },
  },
} as Meta;

export const Basic: StoryObj = {
  render: (args) => ({
    props: args,
    template: basicTemplate
  }),
  args: {
    disabled: false,
    invalid: false,
  },
  name: 'Standard',
};
