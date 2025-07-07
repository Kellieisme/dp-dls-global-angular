import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { IconRegistryStorybookModule } from '../../../../icon-registry';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'COMPONENTS/Tabs',
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatTabsModule,
        MatIconModule,
        IconRegistryStorybookModule
      ],
    }),
  ],
} as Meta;

type Story = StoryObj;

export const FullWidthTabs: Story = {
  render: () => ({
    template: `
      <mat-tab-group>
        <mat-tab label="First"></mat-tab>
        <mat-tab label="Second"></mat-tab>
        <mat-tab label="Third"></mat-tab>
      </mat-tab-group>
    `,
  }),
};

export const LeftTabs: Story = {
  render: () => ({
    template: `
      <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="start">
        <mat-tab label="First"></mat-tab>
        <mat-tab label="Second"></mat-tab>
        <mat-tab label="Third"></mat-tab>
      </mat-tab-group>
    `,
  }),
};

export const CenteredTabs: Story = {
  render: () => ({
    template: `
      <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="center">
        <mat-tab label="First"></mat-tab>
        <mat-tab label="Second"></mat-tab>
        <mat-tab label="Third"></mat-tab>
      </mat-tab-group>
    `,
  }),
};

export const Pagination: Story = {
  render: () => ({
    template: `
      <mat-tab-group>
        <mat-tab *ngFor="let tab of lotsOfTabs" [label]="tab"></mat-tab>
      </mat-tab-group>
    `,
    props: {
      lotsOfTabs: Array.from({ length: 20 }, (_, i) => `Tab ${i + 1}`)
    }
  }),
};

export const CustomWithIcons: Story = {
  render: () => ({
    template: `
      <mat-tab-group>
  <mat-tab>
    <ng-template mat-tab-label>
      <mat-icon svgIcon="icon-grid-on-filled"></mat-icon>
      First
    </ng-template>
  </mat-tab>

  <mat-tab>
    <ng-template mat-tab-label>
      <mat-icon svgIcon="icon-airplanemode-active"></mat-icon>
      Second
    </ng-template>
  </mat-tab>

  <mat-tab>
    <ng-template mat-tab-label>
        <mat-icon svgIcon="icon-group"></mat-icon>
      Third
    </ng-template>
  </mat-tab>
</mat-tab-group>
`
  }),
};