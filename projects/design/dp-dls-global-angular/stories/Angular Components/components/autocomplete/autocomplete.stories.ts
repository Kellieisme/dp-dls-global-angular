import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { Component, computed, input, signal } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';

@Component({
    selector: 'autocomplete-example',
    imports: [
        MatInputModule,
        FormsModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        CommonModule,
        MatIconModule,
        MatIconButton
    ],
    template: `
    <form>
      <mat-form-field style="width: 250px" [ngClass]="{'mat-form-field-invalid': invalid()}">
        <mat-label>Selected Option</mat-label>
        <input
          type="text"
          name="product"
          placeholder="Pick one"
          matInput
          #product
          [disabled]="disabled()"
          [(ngModel)]="selectedProduct"
          [matAutocomplete]="auto"
          (input)="onChange(product.value)"
          (focus)="onChange(product.value)"
        >
        @if (selectedProduct() && showClear()) {
          <button matSuffix mat-icon-button aria-label="Clear" (click)="selectedProduct.set('')">
            <mat-icon svgIcon="icon-close"></mat-icon>
          </button>
        }
        <mat-autocomplete requireSelection #auto="matAutocomplete">
          @for (option of options(); track option) {
            <mat-option [value]="option">{{ option }}</mat-option>
          }
        </mat-autocomplete>
        <mat-hint>Filter list by typing</mat-hint>
      </mat-form-field>
    </form>
  `
})
export class AutocompleteExampleComponent {
  public disabled = input(false);
  public invalid = input(false);
  public showClear = input(true);
  public selectedProduct = signal('');

  public options = computed(() => {
    const filter = this.#filterByText().toLowerCase();
    return this.#allOptions().filter(x => x.toLowerCase().includes(filter));
  });

  public onChange(text: string) {
    this.#filterByText.set(text);
  }

  #allOptions = signal(['Beef', 'Chicken', 'Salmon', 'Eggs']);
  #filterByText = signal('')
}

export default {
  title: 'COMPONENTS/Autocomplete',
  component: AutocompleteExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        IconRegistryModule,
      ],
    }),
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the input is in an invalid state',
    },
    showClear: {
      control: 'boolean',
      description: 'Whether to show clear value button'
    },
  },
} as Meta;

export const Basic: StoryObj = {
  render: (args) => ({
    props: args,
    template: '<autocomplete-example [disabled]="disabled" [invalid]="invalid" [showClear]="showClear"></autocomplete-example>',
  }),
  args: {
    disabled: false,
    invalid: false,
    showClear: true,
  },
  name: 'Standard',
};
