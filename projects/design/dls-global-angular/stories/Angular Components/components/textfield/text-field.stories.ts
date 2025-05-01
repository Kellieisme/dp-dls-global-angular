import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { IconRegistryStorybookModule } from '../../../../icon-registry';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'COMPONENTS/Text Field',
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
      <mat-form-field [ngClass]="{'mat-form-field-invalid' : invalid}">
        <mat-label>{{labelText}}</mat-label>
        <input matInput [placeholder]="placeholder" [disabled]="disabled" />
        <mat-hint *ngIf="hintTextLeft !== ''">{{ hintTextLeft }}</mat-hint>
        <mat-hint align="end" *ngIf="hintTextRight !== ''">{{ hintTextRight }}</mat-hint>
      </mat-form-field>
    </form>
`

const currencyTemplate = () =>
  ` <form>
      <mat-form-field floatLabel="always" [ngClass]="{'mat-form-field-invalid' : invalid}">
        <mat-label>{{labelText | titlecase}}</mat-label>
        <input matInput [placeholder]="placeholder" [disabled]="disabled" class="justify-right"/>
        <span matTextPrefix *ngIf="prefix">{{ prefixText }}</span>
        <mat-hint *ngIf="hintTextLeft !== ''">{{ hintTextLeft }}</mat-hint>
        <mat-hint align="end" *ngIf="hintTextRight !== ''">{{ hintTextRight }}</mat-hint>
      </mat-form-field>
    </form>
`

const weightTemplate = () =>
  ` <form>
      <mat-form-field floatLabel="always" [ngClass]="{'mat-form-field-invalid' : invalid}">
        <mat-label>{{labelText | titlecase}}</mat-label>
        <input matInput [placeholder]="placeholder" [disabled]="disabled"/>
        <span matTextSuffix *ngIf="suffix">{{ suffixText }}</span>
        <mat-hint *ngIf="hintTextLeft !== ''">{{ hintTextLeft }}</mat-hint>
        <mat-hint align="end" *ngIf="hintTextRight !== ''">{{ hintTextRight }}</mat-hint>
      </mat-form-field>
    </form>
`

const iconTemplate = () =>
  ` <form>
      <mat-form-field [ngClass]="{'mat-form-field-invalid' : invalid}">
        <mat-label>{{labelText | titlecase}}</mat-label>
        <input matInput [placeholder]="placeholder" [disabled]="disabled"/>
        <mat-icon svgIcon="icon-search" matPrefix *ngIf="leadingIcon"></mat-icon>
        <mat-icon svgIcon="icon-cancel" matSuffix *ngIf="trailingIcon"></mat-icon>
        <mat-hint *ngIf="hintTextLeft !== ''">{{ hintTextLeft }}</mat-hint>
        <mat-hint align="end" *ngIf="hintTextRight !== ''">{{ hintTextRight }}</mat-hint>
      </mat-form-field>
    </form>
`

export const Basic: StoryObj = {
  args: {
    labelText: 'Favorite Food',
    placeholder: 'ex: Pizza',
    hintTextLeft: 'Left hint',
    hintTextRight: 'Right hint',
    disabled: false,
    invalid: false,
  },
  render: ({ labelText, placeholder, hintTextLeft, hintTextRight, disabled, invalid }) => ({
    props: { labelText, placeholder, hintTextLeft, hintTextRight, disabled, invalid },
    template: basicTemplate(),
  }),
  name: 'Standard',
};

export const Currency: StoryObj = {
  args: {
    labelText: 'Amount',
    placeholder: '00',
    hintTextLeft: 'Text prefix, right-justified',
    hintTextRight: '',
    prefix: true,
    prefixText: '$',
    disabled: false,
    invalid: false,
  },
  render: ({ labelText, placeholder, hintTextLeft, hintTextRight, prefix, prefixText, disabled, invalid }) => ({
    props: { labelText, placeholder, hintTextLeft, hintTextRight, prefix, prefixText, disabled, invalid },
    template: currencyTemplate(),
  }),
  name: 'Currency',
};

export const Weight: StoryObj = {
  args: {
    labelText: 'Weight',
    placeholder: '00',
    hintTextLeft: 'Text suffix',
    hintTextRight: '',
    suffix: true,
    suffixText: 'lbs',
    disabled: false,
    invalid: false,
  },
  render: ({ labelText, placeholder, hintTextLeft, hintTextRight, suffix, suffixText, disabled, invalid }) => ({
    props: { labelText, placeholder, hintTextLeft, hintTextRight, suffix, suffixText, disabled, invalid },
    template: weightTemplate(),
  }),
  name: 'Weight',
};

export const Icons: StoryObj = {
  args: {
    labelText: 'Favorite Food',
    placeholder: 'ex: Pizza',
    hintTextLeft: 'Icons are configurable on each side',
    hintTextRight: '',
    leadingIcon: true,
    trailingIcon: true,
    disabled: false,
    invalid: false,
  },
  render: ({ labelText, placeholder, hintTextLeft, hintTextRight, leadingIcon, trailingIcon, disabled, invalid }) => ({
    props: { labelText, placeholder, hintTextLeft, hintTextRight, leadingIcon, trailingIcon, disabled, invalid },
    template: iconTemplate(),
  }),
  name: 'With Icons',
};




