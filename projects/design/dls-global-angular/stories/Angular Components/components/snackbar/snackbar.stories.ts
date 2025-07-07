import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SnackbarComponent } from '../../../../snackbar';
import { IconRegistryStorybookModule } from '../../../../icon-registry';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'snackbar-trigger',
    template: `<button mat-button (click)="openSnackBar()">
    {{ buttonText }}
  </button>`,
    standalone: false
})
class SnackBarTriggerComponent {
  @Input() message = 'Snackbar message';
  @Input() action?: string;
  @Input() duration?: number;
  @Input() buttonText = 'Open Snackbar';
  @Input() showClose = true;

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: {
        message: this.message,
        action: this.action,
        showClose: this.showClose,
      },
      duration: this.duration
    });
  }
}

const meta: Meta<SnackBarTriggerComponent> = {
  title: 'COMPONENTS/Snackbar',
  component: SnackBarTriggerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatSnackBarModule,
        MatButtonModule,
        MatIconModule,
        IconRegistryStorybookModule,
        SnackbarComponent
      ],
      declarations: [SnackBarTriggerComponent],
    }),
  ],
  argTypes: {
    message: { control: 'text' },
    action: { control: 'text' },
    duration: { control: 'number' },
    buttonText: { control: 'text' },
    showClose: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<SnackBarTriggerComponent>;

export const SingleLineSnackbar: Story = {
  args: {
    message: 'This is a single line snackbar message',
    buttonText: 'Open Single Line Snackbar',
    action: 'Action',
    duration: 5000,
    showClose: true,
  },
};

export const MultiLineSnackbar: Story = {
  args: {
    message: 'This is a multi-line snackbar message.\nIt has two lines.',
    buttonText: 'Open Multi-Line Snackbar',
    action: 'Action',
    duration: 5000,
    showClose: true,
  },
};