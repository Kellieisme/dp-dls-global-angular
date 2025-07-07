import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { IconRegistryStorybookModule } from '../../../../icon-registry';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'COMPONENTS/Tooltip',
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatTooltipModule,
        MatButtonModule,
        MatIconModule,
        IconRegistryStorybookModule
      ],
    }),
  ],
  argTypes: {
    position: {
      description: 'Position',
      control: 'select',
      defaultValue: 'below',
      options: ['below', 'above', 'before', 'after'],
    }
  },
} as Meta;

const TooltipTemplate: StoryObj = {
  args: {
    position: 'below'
  }
};

export const SimpleTooltip: StoryObj = {
  ...TooltipTemplate,
  render: ({ position }) => ({
    props: { position },
    template: ` 
    <div style="display: flex; justify-content: center; padding-top: 80px">
      <button 
          mat-flat-button
          [matTooltipPosition]="position"
          matTooltip="Tooltips bring attention to a particular element or feature that warrants the user’s focus"
          color="primary"
      >
          Hover for tooltip
      </button>
    </div>
    `,
  }),
};

export const TitleTooltip: StoryObj = {
  ...TooltipTemplate,
  render: ({ position }) => ({
    props: { position },
    template: `
    <div style="display: flex; justify-content: center; padding-top: 80px">
      <button 
          mat-flat-button
          [matTooltipPosition]="position"
          matTooltip="Tooltip\nTooltip brings attention to a particular element or feature that warrants the user’s focus"
          color="primary"
      >
          Hover for tooltip
      </button>
    </div>
    `,
  }),
};