import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

export default {
  title: 'COMPONENTS/Divider',
  decorators: [
    moduleMetadata({
      imports: [MatListModule, MatDividerModule],
    }),
  ],
  argTypes: {
    style: {
      description: 'Style of divider',
      control: 'select',
      defaultValue: 'flat',
      options: ['flat', 'specular'],
    },
  },
} as Meta;

type Story = StoryObj<{
  style: 'flat' | 'specular';
}>;

export const FullBleedDivider: Story = {
  args: {
    style: 'flat',
  },
  parameters: { layout: 'fullscreen' },
  render: (args) => ({
    props: args,
    template: `
          <div style="margin-top: 24px">
          <mat-divider 
            [ngClass]="{'flat': style === 'flat', 'specular': style === 'specular'}">
          </mat-divider>
          </div>
    `,
  }),
};

export const VerticalDivider: Story = {
  args: {
    style: 'flat',
  },
  render: (args) => ({
    props: args,
    template: `
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col">
          <mat-divider 
            [vertical]="true"
            [ngClass]="{'flat': style === 'flat', 'specular': style === 'specular'}" 
            style="height: 200px;">
          </mat-divider>
        </div>
      </div>
    </div>
    `,
  }),
};

export const InsetDivider: Story = {
  render: () => ({
    template: `
          <mat-divider [inset]="true">
          </mat-divider>
    `,
  }),
};

export const MiddleInset: Story = {
  render: () => ({
    template: `
          <mat-divider
            [inset]="true" class="middle-inset">
          </mat-divider>
    `,
  }),
};
