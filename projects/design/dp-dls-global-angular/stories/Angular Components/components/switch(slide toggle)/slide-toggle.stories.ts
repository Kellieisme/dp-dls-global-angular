import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SwitchExampleComponent, CustomIconSwitchExampleComponent } from './switch-example/switch-example.component';
import { CommonModule } from '@angular/common';

const meta: Meta = {
  title: 'Components/Switch (Slide toggle)',
  decorators: [
    moduleMetadata({
      imports: [
        MatSlideToggleModule,
        MatIconModule,
        FormsModule,
        SwitchExampleComponent,
        CustomIconSwitchExampleComponent,
        CommonModule
      ]
    }),
  ],
} satisfies Meta;
export default meta;

const getTemplate = (args: any) => `
  <div style="display: flex; align-items: center; gap: 12px;">
    <mat-slide-toggle
      [color]="color"
      [disabled]="disabled"
      [labelPosition]="labelPosition"
      [hideIcon] = "hideIcon"
      [checked] = "checked"
      [required] = "required"
      (change)="onChange($event)"
      (toggleChange)="onToggleChange($event)"
    >
      {{ labelPosition === 'after' ? 'Label After' : 'Label Before' }}
    </mat-slide-toggle>
  </div>
`;

const DefaultArgs = {
  color: 'primary',
  labelPosition: 'after',
  disabled: false,
  hideIcon: false,
  checked: false
};

export const Default: StoryObj = {
  args: DefaultArgs,
  render: (args: any) => ({
    props: {
      ...args,
      onChange: (event: Event) => console.log('Change event:', event),
      onToggleChange: (event: any) => console.log('Toggle change event:', event),
    },
    template: getTemplate(args),
    argTypes: {
      color: {
        control: 'select',
        defaultValue: 'primary',
        options: ['primary', 'warn'],
      },
      labelPosition: {
        control: 'select',
        defaultValue: 'after',
        options: ['before', 'after'],
      },
      disabled: {
        control: 'boolean',
      },
      required: {
        control: 'boolean',
      },
      hideIcon: {
        control: 'boolean',
      },
      checked: {
        defaultValue: 'false',
        control: 'boolean',
      }
    }
  }),
};

export const requiredSwitch: StoryObj = {
  name: 'Required Switch on Form',
  render: (args: any) => ({
    props: args,
    template: `<lib-switch-example></lib-switch-example>`,
  }),
  args: {},
  parameters: {
    docs: {
      source: {
        language: "typescript",
        code: `
import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
selector: 'lib-switch-example',
standalone: true,
imports: [MatSlideToggleModule, MatIconModule, IconRegistryModule, CommonModule, FormsModule, MatButtonModule],
template: '
  <form #form="ngForm" (ngSubmit)="onSubmit(form)" style="display: flex;flex-direction: column;">
    <p style="margin: 20px 0px; color: var(--color-ui-textandicon-high);">
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
      in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <mat-slide-toggle name="requiredToggle" [(ngModel)]="requiredToggle" required color="primary"
      (change)="onChange($event)" (toggleChange)="onToggleChange()" #toggle="ngModel">
      Accept Terms
    </mat-slide-toggle>
  
    <div *ngIf="toggle.invalid && toggle.touched" style="color: var(--color-semantic-textandicon-error)">
      You must accept to continue.
    </div>
  
    <button mat-flat-button type="submit" color="primary" style="width: 100px;margin-top: 20px;">Submit</button>
  </form>
      
  <div style="color: var(--color-ui-textandicon-high);margin: 10px 0;">
    <li *ngFor="let item of printText">The {{ item[0] }} to {{item[1].checked}}</li>
  </div>
',
styleUrl: './switch-example.component.scss'
})
export class SwitchExampleComponent {

changeText: MatSlideToggleChange | undefined;
toggleText: string = '';
printText: Array<any> = [];

onToggleChange() {
  console.log('Toggle Changed:');
  this.toggleText = 'Toggle Changed';
}

onChange(event: MatSlideToggleChange) {
  console.log('Change Event Triggered:', event.source);
  this.changeText = event;
  this.printText.push([this.toggleText, this.changeText])
  console.log(this.printText);
}

onSubmit(form: NgForm) {
  if (form.valid) {
    console.log('Form Submitted:', form.value);
  } else {
    console.warn('Form is invalid');
  }
}
}

        `,
        type: "auto",
      }
    }
  }
};

export const CustomIcons: StoryObj = {
  name: 'Switch with Dynamic Icons',
  render: (args: any) => ({
    props: args,
    template: `<lib-switch-custom-icon-example></lib-switch-custom-icon-example>`,
  }),
  args: {},
  parameters: {
    docs: {
      source: {
        language: "typescript",
        code: `
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';

@Component({
  selector: 'lib-switch-custom-icon-example',
  standalone: true,
  imports: [MatSlideToggleModule, MatIconModule, IconRegistryModule, CommonModule],
  template: '
  <div>
  <mat-slide-toggle class="icon-slide-toggle"></mat-slide-toggle>
  </div>
',
  style: ['
  $sun-path: 'm5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5Z';
  $moon-path: 'M21.64 13a1 1 0 0 0-1.05-.14a8.05 8.05 0 0 1-3.37.73a8.15 8.15 0 0 1-8.14-8.1a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69a1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14a9.79 9.79 0 0 0 2.1-.22a8.11 8.11 0 0 1-7.18 4.32Z';
  
  ::ng-deep .icon-slide-toggle .mdc-switch__icon {
    transform: scale(0.8); // This is optional for a better icon fit
  
    // Toggle off
    &--off > path {
      d: path($sun-path);
    }
    
    // Toggle on
    &--on > path {
      d: path($moon-path);
    }
  }']
})
export class CustomIconSwitchExampleComponent {}
        `,
        type: "auto",
      }
    }
  }
};



