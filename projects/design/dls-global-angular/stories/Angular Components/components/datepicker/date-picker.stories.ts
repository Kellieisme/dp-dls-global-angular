import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'COMPONENTS/Date Picker',
  decorators: [
    moduleMetadata({
      imports: [MatInputModule, MatFormFieldModule, MatDatepickerModule, FormsModule, BrowserAnimationsModule],
      providers: [provideNativeDateAdapter()],
    }),
  ],
} as Meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */


const basicTemplate = () =>
  ` <form>
      <mat-form-field>
        <mat-label>Choose a date</mat-label>
        <input matInput [matDatepicker]="picker">
        <mat-hint>MM/DD/YYYY</mat-hint>
        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
    </form>
`

const disabledTemplate = () =>
  ` <form>
      <mat-form-field>
        <mat-label>Choose a date</mat-label>
        <input matInput [matDatepicker]="picker" disabled>
        <mat-hint>MM/DD/YYYY</mat-hint>
        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
    </form>
`

const invalidTemplate = () =>
  ` <form>
      <mat-form-field class="mat-form-field-invalid">
        <mat-label>Choose a date</mat-label>
        <input matInput [matDatepicker]="picker">
        <mat-hint>MM/DD/YYYY</mat-hint>
        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
    </form>
`

export const Basic: StoryObj = {
  render: () => ({
    template: basicTemplate(),
  }),
  name: 'Standard',
};

export const Disabled: StoryObj = {
  render: () => ({
    template: disabledTemplate(),
  }),
  name: 'Disabled',
};

export const Invalid: StoryObj = {
  render: () => ({
    template: invalidTemplate(),
  }),
  name: 'Invalid',
};


