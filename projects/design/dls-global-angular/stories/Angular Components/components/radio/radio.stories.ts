// import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
// import { MatRadioButton, MatRadioGroup, MatRadioModule } from '@angular/material/radio';



// export default {
//   title: 'COMPONENTS/Radio Button',
//   decorators: [
//     moduleMetadata({
//       imports: [MatRadioModule, MatRadioGroup, MatRadioButton],
//     }),
//   ],
//   argTypes: {
//     disabled: {
//       control: 'boolean',
//       description: 'Whether the radio buttons are disabled',
//     },
//   },
// } as Meta<MatRadioGroup>;

// export const Basic: StoryObj<MatRadioGroup> = {
//   render: (args:any) => basicTemplate(args),
//   args: {
//     disabled: false,
//   },
//   name: 'Standard',
// };


// import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
// import { MatRadioButton, MatRadioGroup, MatRadioModule } from '@angular/material/radio';
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// const basicTemplate = (args: { disabled: boolean }) => ({
//   template: `
//     <mat-radio-group aria-label="Select an option">
//       <mat-radio-button value="1" [disabled]="disabled">Option 1</mat-radio-button><br>
//       <mat-radio-button value="2" [disabled]="disabled">Option 2</mat-radio-button><br>
//     </mat-radio-group>
//   `,
//   props: args,
// });

import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatRadioButton, MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'radio-interactive-example',
  standalone: true,
  imports: [CommonModule, MatRadioModule, FormsModule],
  template: `
    <mat-radio-group [(ngModel)]="choice">
      <mat-radio-button *ngFor="let opt of options" [value]="opt">
        {{ opt }}
      </mat-radio-button>
    </mat-radio-group>
    <p class="mt-2" style="color:var(--color-ui-textandicon-high)">You selected: {{ choice }}</p>
  `,
})
class RadioInteractiveExample {
  options = ['Red', 'Blue', 'Green', 'Yellow'];
  choice = 'Red';
}



export default {
  title: 'COMPONENTS/Radio Button',
  decorators: [
    moduleMetadata({
      imports: [MatRadioModule, MatRadioGroup, MatRadioButton, RadioInteractiveExample],
    }),
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the radio buttons are disabled',
    },
  },
} as Meta<MatRadioGroup>;

const basicTemplate = (args: { disabled: boolean }) => ({
  template: `
    <mat-radio-group aria-label="Select an option">
      <mat-radio-button value="1" [disabled]="disabled">Option 1</mat-radio-button><br>
      <mat-radio-button value="2" [disabled]="disabled">Option 2</mat-radio-button><br>
    </mat-radio-group>
  `,
  props: args,
});

export const Default: StoryObj<MatRadioGroup> = {
  render: (args:any) => basicTemplate(args),
  args: {
    disabled: false,
  },
  name: 'Standard',
};


export const Interactive: StoryObj = {
  name: 'Interactive Group',
  render: (args: any) => ({
    props: args,
    template: `<radio-interactive-example></radio-interactive-example>`,
  }),
};