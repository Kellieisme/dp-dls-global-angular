import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { IconRegistryStorybookModule } from '../../../../icon-registry';

export enum LeadingItemType {
  Icon = 'icon',
  Avatar = 'avatar',
  RadioButton = 'radioButton',
  Checkbox = 'checkbox',
  Image = 'image',
  SlideToggle = 'slideToggle'
}

export enum TrailingItemType {
  Icon = 'icon',
  Checkbox = 'checkbox',
  RadioButton = 'radioButton',
}

export default {
  title: 'COMPONENTS/List',
  decorators: [
    moduleMetadata({
      imports: [
        MatListModule,
        MatCheckboxModule,
        MatRadioModule,
        MatIconModule,
        IconRegistryStorybookModule,
        MatDividerModule,
        MatSlideToggleModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
  argTypes: {
    multiline: {
      control: 'boolean',
      description: 'Enable multi-line items',
    },
    interactive: {
      control: 'boolean',
      description: 'Enable interactive list items',
    },
    enableEmphasis: {
      control: 'boolean',
      description: 'Enable high Emphasiss',
    },
    items: {
      control: 'object',
      description: 'List items content',
    },
    leadingItemType: {
      control: 'select',
      options: Object.values(LeadingItemType),
      description: 'Type of leading item',
    },
    trailingItemType1: {
      control: 'select',
      options: Object.values(TrailingItemType),
      description: 'Type of trailing item',
    },
    // trailingItemType2: {
    //   control: 'select',
    //   options: Object.values(TrailingItemType),
    //   description: 'Type of second trailing item (optional)',
    // },
  },
} as Meta;

const defaultTemplate = `
<div class="container-fluid">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
<div class="col">
<mat-list>
  <mat-list-item *ngFor="let item of items" class="list-item" [class.interactive]="interactive" [class.multiline]="multiline" [class.enableEmphasis]="enableEmphasis">
  

    <mat-icon matListItemIcon *ngIf="leadingItemType === 'icon'" [svgIcon]="leadingIcon"></mat-icon>
    <img matListItemAvatar *ngIf="leadingItemType === 'avatar'" [src]="item.avatarSrc" alt="Avatar">
    <img matListItemAvatar *ngIf="leadingItemType === 'image'" [src]="item.imageSrc" alt="Avatar">
    <mat-radio-button matListItemMeta *ngIf="leadingItemType === 'radioButton'"></mat-radio-button>
    <mat-slide-toggle matListItemMeta *ngIf="leadingItemType === 'slideToggle'"></mat-slide-toggle>
    

    <div matListItemTitle class="overline" *ngIf="multiline">{{ item.overline }}</div>
    <div matListItemTitle>{{ item.title }}</div>
    <div matListItemLine *ngIf="multiline">{{ item.subtitle }}</div>

    
    <mat-icon matListItemIcon class="trailing-icon" *ngIf="trailingItemType1 === 'icon'" [svgIcon]="trailingIcon1"></mat-icon>
    <mat-radio-button matListItemMeta *ngIf="trailingItemType1 === 'radioButton'"></mat-radio-button>
    <mat-slide-toggle matListItemMeta *ngIf="trailingItemType1 === 'slideToggle'"></mat-slide-toggle>
  
  <mat-divider [inset]="true" class="middle-inset"></mat-divider>
  </mat-list-item>
</mat-list>
</div>
</div>
</div>
`;

const selectionListTemplate = `

<div class="container-fluid">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
<div class="col">
<mat-selection-list>
  <mat-list-option *ngFor="let item of items" [class.interactive]="interactive" [class.multiline]="multiline" [class.enableEmphasis]="enableEmphasis">

  <mat-icon matListItemIcon *ngIf="leadingItemType === 'icon'" [svgIcon]="leadingIcon"></mat-icon>
  <img matListItemAvatar *ngIf="leadingItemType === 'avatar'" [src]="item.avatarSrc" alt="Avatar">
  <mat-radio-button matListItemMeta *ngIf="leadingItemType === 'radioButton'"></mat-radio-button>
  <mat-slide-toggle matListItemMeta *ngIf="leadingItemType === 'slideToggle'"></mat-slide-toggle>

  <div matListItemTitle class="overline" *ngIf="multiline">{{ item.overline }}</div>
  <div matListItemTitle>{{ item.title }}</div>
  <div matListItemLine *ngIf="multiline">{{ item.subtitle }}</div>

  <mat-icon matListItemIcon class="trailing-icon" *ngIf="trailingItemType1 === 'icon'" [svgIcon]="trailingIcon1"></mat-icon>
  <mat-radio-button matListItemMeta *ngIf="trailingItemType1 === 'radioButton'"></mat-radio-button>
  <mat-slide-toggle matListItemMeta *ngIf="trailingItemType1 === 'slideToggle'"></mat-slide-toggle>

  

  <mat-divider [inset]="true" class="middle-inset"></mat-divider>
  </mat-list-option>
</mat-selection-list>
<div class="container-fluid">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
<div class="col">
`;

const baseArgs = {
  multiline: false,
  interactive: false,
  enableEmphasis: false,
  leadingIcon: 'icon-man',
  trailingIcon1: 'icon-interests',
  leadingItemType: LeadingItemType,
  trailingItemType1: TrailingItemType,
  // trailingItemType2: TrailingItemType,
  items: [
    {
      title: 'List item 1',
      subtitle: 'Supporting line text lorem ipsum dolor sit amet, consectetur.',
      overline: 'overline',
    },
    {
      title: 'List item 2',
      subtitle: 'Supporting text',
      overline: 'overline',
    },
    {
      title: 'List item 3',
      subtitle: 'Supporting text',
      overline: 'overline',
    },
    {
      title: 'List item 4',
      subtitle: 'Supporting text',
      overline: 'overline',
    },
  ],
};

const ListTemplate: StoryObj = {
  args: baseArgs,
  render: ({ multiline, interactive, enableEmphasis, items, leadingItemType, trailingItemType1, leadingIcon, trailingIcon1 }) => ({
    props: { multiline, interactive, enableEmphasis, items, leadingItemType, trailingItemType1, leadingIcon, trailingIcon1 },
    template: leadingItemType === LeadingItemType.Checkbox || trailingItemType1 === TrailingItemType.Checkbox ? selectionListTemplate : defaultTemplate,
  }),
};

export const SingleLineNonInteractive: StoryObj = {
  ...ListTemplate,
  args: {
    ...baseArgs,
    multiline: false,
    interactive: false,
  },
};

export const MultiLineNonInteractive: StoryObj = {
  ...ListTemplate,
  args: {
    ...baseArgs,
    multiline: true,
    interactive: false,
  },
};

export const SingleLineInteractive: StoryObj = {
  ...ListTemplate,
  args: {
    ...baseArgs,
    multiline: false,
    interactive: true,
  },
};

export const MultiLineInteractive: StoryObj = {
  ...ListTemplate,
  args: {
    ...baseArgs,
    multiline: true,
    interactive: true,
  },
};
