import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { IconRegistryStorybookModule } from '../../../../icon-registry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'COMPONENTS/Menu',
  decorators: [
    moduleMetadata({
      imports: [MatMenuModule, MatDividerModule, MatButtonModule, MatIconModule, IconRegistryStorybookModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {

  },
} as Meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

const templateOne =
  `
<button mat-flat-button color="primary" [matMenuTriggerFor]="menuOne">Button
  <mat-icon svgIcon="icon-keyboard-arrow-down" iconPositionEnd></mat-icon>
</button>
<mat-menu #menuOne="matMenu">
  <button mat-menu-item>Menu Item 1</button>
  <button mat-menu-item>Menu Item 2</button>
  <button mat-menu-item>Menu Item 3</button>
  <button mat-menu-item>Menu Item 4</button>
</mat-menu>
`

const templateTwo =
  `
<button mat-icon-button color="primary" [matMenuTriggerFor]="menuTwo" aria-label="Example icon-button with a menu">
  <mat-icon svgIcon="icon-more-vert"></mat-icon>
</button>
<mat-menu #menuTwo="matMenu">
  <button mat-menu-item>
    <mat-icon svgIcon="icon-folder">folder</mat-icon>
    <span>Menu item 1</span>
  </button>
  <button mat-menu-item disabled>
    <mat-icon svgIcon="icon-article">article</mat-icon>
    <span>Menu item 2</span>
  </button>
  <mat-divider></mat-divider>
  <button mat-menu-item>
    <mat-icon svgIcon="icon-key">key</mat-icon>
    <span>Menu item 3</span>
  </button>
  <button mat-menu-item>
    <mat-icon svgIcon="icon-download-filled">download-filled</mat-icon>
    <span>Menu item 4</span>
  </button>
  <button mat-menu-item>
    <mat-icon svgIcon="icon-delete">delete</mat-icon>
    <span>Menu item 5</span>
  </button>
</mat-menu>
`

const templateThree =
  `
<button mat-icon-button color="accent" [matMenuTriggerFor]="menuThree" aria-label="Example icon-button with a menu">
  <mat-icon svgIcon="icon-edit"></mat-icon>
</button>
<mat-menu #menuThree="matMenu">
  <button mat-menu-item>
    <span>Primary Item 1</span><span class="mat-menu-item__shortcut">⌥⌘L</span>
  </button>
  <button mat-menu-item>Primary Item 1</button>
  <button mat-menu-item [matMenuTriggerFor]="itemThreeLevelTwo">Primary Item 3</button>
  <button mat-menu-item [matMenuTriggerFor]="itemFourLevelTwo">Primary Item 4</button>
</mat-menu>

<mat-menu #itemThreeLevelTwo="matMenu">
  <button mat-menu-item><span>Secondary Item 1</span><span class="mat-menu-item__shortcut">⌘T</span></button>
  <button mat-menu-item><span>Secondary Item 2</span><span class="mat-menu-item__shortcut">⌥⌘L</span></button>
  <button mat-menu-item>Secondary Item 3</button>
  <button mat-menu-item>Secondary Item 4</button>
</mat-menu>

<mat-menu #itemFourLevelTwo="matMenu">
  <button mat-menu-item>Secondary Item 1</button>
  <button mat-menu-item>Secondary Item 2</button>
  <button mat-menu-item>Secondary Item 3</button>
  <button mat-menu-item>Secondary Item 4</button>
</mat-menu>
`

const MenuTemplate: StoryObj = {
  args: {

  }
};

export const StoryOne: StoryObj = {
  ...MenuTemplate,
  render: ({ }) => ({
    props: {},
    template: templateOne
  }),
  name: 'Button',
};

export const StoryTwo: StoryObj = {
  ...MenuTemplate,
  render: ({ }) => ({
    props: {},
    template: templateTwo
  }),
  name: 'Leading icons, divider',
};

export const StoryThree: StoryObj = {
  ...MenuTemplate,
  render: ({ }) => ({
    props: {},
    template: templateThree
  }),
  name: 'Nested, trailing text',
};



