import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { IconRegistryStorybookModule } from '../../../../icon-registry';
import { SideSheetComponent } from '../../../../sidesheet/src/sidesheet.component';

export default {
  title: 'COMPONENTS/Sidesheet',
  component: SideSheetComponent,
  parameters: { layout: 'fullscreen' },
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        IconRegistryStorybookModule,
        MatSidenavModule,
      ],
    }),
  ],
  argTypes: {
    variant: {
      description: 'Variant of the Sidesheet',
      control: 'select',
      defaultValue: 'standard',
      table: {
        defaultValue: { summary: 'standard' },
      },
      options: ['standard', 'modal'],
    },
    sidesheetPosition: {
      description: 'Sidesheet position',
      control: 'select',
      defaultValue: 'start',
      options: ['start', 'end'],
    },
    showFooter: {
      control: 'boolean',
      defaultValue: true,
    },
    buttons: {
      description: 'Custom buttons displayed at the bottom',
      control: 'object',
      defaultValue: [
        { text: 'label', buttonType: 'stroked' },
        { text: 'label', buttonType: 'flat' },
      ],
    },
  },
} as Meta;

type SideSheetStory = StoryObj<SideSheetComponent>;

type Button = { text: string; onClick: () => void; buttonType?: 'text' | 'stroked' | 'flat' };

const baseArgs = {
  opened: true,
  buttons: [
    { text: 'label', buttonType: 'stroked' },
    { text: 'label', buttonType: 'flat' },
  ] as Button[]
};

export const Standard: SideSheetStory = {
  name: 'Standard',
  args: {
    ...baseArgs,
    variant: 'standard',
  },
};

export const Modal: SideSheetStory = {
  name: 'Modal',
  args: {
    ...baseArgs,
    variant: 'modal',
  },
};
