// Import necessary modules and types for Storybook
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Set up Storybook metadata for the Progress Indicator component
export default {
  title: 'COMPONENTS/Progress Indicator', // Sets the Storybook title path for this story
  decorators: [
    moduleMetadata({
      // Imports necessary Angular Material modules for ProgressBar and ProgressSpinner components
      imports: [MatProgressBarModule, MatProgressSpinnerModule],
    }),
  ],
  argTypes: {
    // Configures the 'mode' control for both ProgressBar and ProgressSpinner
    mode: {
      description: 'Mode', // Description shown in Storybook Docs
      control: 'select', // Control type 'select' allows choosing from predefined options
      options: ['determinate', 'indeterminate'], // Available modes
      defaultValue: 'determinate', // Default mode value
      table: {
        defaultValue: { summary: 'determinate' }, // Shown as the default value in Storybook’s table
      },
    },
    // Configures the 'value' control, which represents the progress value for determinate mode
    value: {
      description: 'Value', // Description shown in Storybook Docs
      control: { type: 'range', min: 1, max: 100, step: 1 }, // Range slider control for selecting value
      defaultValue: 50, // Default value for the progress indicator
      table: {
        defaultValue: { summary: '50' }, // Displayed as default in Storybook’s table
      },
      if: { arg: 'mode', eq: 'determinate' }, // Control only appears if 'mode' is set to 'determinate'
    },
    color: {
      description: 'Color', // Description shown in Storybook Docs
      control: 'select', // Control type 'select' allows choosing from predefined options
      options: ['','progress-success', 'progress-warning', 'progress-error'], // Available modes
      defaultValue: '', // Default mode value kept blank to get the default value
      table: {
        defaultValue: { summary: '' }, // Shown as the default value in Storybook’s table
      },
    },
    strokeWidth: {
      description: 'Stroke Width of the spinner-indicator',
      control: {type: 'range', min: 1, max: 20, step: 1 },
      defaultValue: 10,
      table: {
        defaultValue: { summary: '10' }
      }
    },
    diameter: {
      description: 'Diameter of the spinner-indicator',
      control: {type: 'range', min: 50, max: 200, step: 1},
      defaultValue: 100,
      table: {
        defaultValue: { summary: '100' }
      }
    }
  },
} as Meta;

// Define a reusable template for the Progress Bar component
const ProgressBarTemplate: StoryObj = {
  args: {
    mode: 'determinate', // Default mode for the progress bar
    value: 50,           // Default progress value
    color: '',           // Default is empty string which means the info color will be in effect by default
  },
};

// Define a reusable template for the Progress Spinner component
const ProgressSpinnerTemplate: StoryObj = {
  args: {
    mode: 'determinate', // Default mode for the progress spinner
    value: 50,           // Default progress value
    color: '',           // Default is empty string which means the info color will be in effect by default,
    strokeWidth: 10,
    diameter: 100,
  },
};

// Story configuration for the Progress Bar component
export const ProgressBar: StoryObj = {
  ...ProgressBarTemplate, // Reuses default args from ProgressBarTemplate
  argTypes: {
    strokeWidth: { table: { disable: true } },
    diameter: { table: { disable: true } },
  },
  render: ({ mode, value, color }) => ({
    props: { mode, value, color }, // Binds mode and value as properties for the component
    template: `
      <mat-progress-bar [mode]="mode" [value]="value" class='{{color}}'></mat-progress-bar>
      <!-- Angular Material Progress Bar component with mode and value bindings -->
    `,
  }),
  name: 'Progress Bar', // Custom display name for this story in Storybook
};

// Story configuration for the Progress Spinner component
export const ProgressSpinner: StoryObj = {
  ...ProgressSpinnerTemplate, // Reuses default args from ProgressSpinnerTemplate
  render: ({ mode, value, color, strokeWidth, diameter }) => ({
    props: { mode, value, color, strokeWidth, diameter }, // Binds mode and value as properties for the component
    template: `
    <mat-progress-spinner [mode]="mode" [value]="value" class='{{color}}' [strokeWidth]="strokeWidth" [diameter]="diameter"></mat-progress-spinner>
    <!-- Angular Material Progress Spinner component with mode and value bindings -->
    `,
  }),
  name: 'Progress Spinner', // Custom display name for this story in Storybook
};
