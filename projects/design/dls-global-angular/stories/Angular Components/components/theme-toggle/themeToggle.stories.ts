import { IconRegistryStorybookModule } from '@dasdigitalplatform/dls-global-angular/icon-registry';
import {
  ThemeToggleComponent,
  ThemeToggleModule,
  ThemeToggleService,
} from '@dasdigitalplatform/dls-global-angular/theme-toggle';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

// CUSTOM THEME TOGGLE COMPONENT
@Component({
  selector: 'custom-theme-toggle',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    ThemeToggleModule,
    MatButtonModule,
  ],
  template: `
    <div
      style="display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 240px;
    justify-content: space-evenly;"
    >
      <mat-slide-toggle (change)="onToggle()"></mat-slide-toggle>
      <p style="color: var(--color-ui-textandicon-high);">
        The theme captured through observable in ThemeToggleService is:</p> 
      <h1 style="color: var(--color-ui-textandicon-high);">{{ themetext }}</h1>
      <button mat-flat-button (click)="buttonClick()">
        Show Current Theme
      </button>
      <p style="color: var(--color-ui-textandicon-high);">the current theme is : {{ buttonText }}</p>
    </div>
  `,
})
export class CustomThemeToggleComponent {
  themetext: any = '';
  buttonText: any;

  //Subscribing to observable to get theme when theme changes
  constructor(private themeService: ThemeToggleService) {
    this.themeService.themeChanged$.subscribe((theme: any) => {
      this.themetext = theme;
    });
  }

  // using getCurrentTheme to get current theme
  buttonClick() {
    this.buttonText = this.themeService.getCurrentTheme();
  }

  // using toggleTheme() to switch themes through custom component
  onToggle() {
    this.themeService.toggleTheme();
  }
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Theme Toggle',
  component: ThemeToggleComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ThemeToggleModule,
        IconRegistryStorybookModule,
        CustomThemeToggleComponent,
      ],
    }),
  ]
} as Meta;

// DEFAULT

export const Default: StoryObj = {
  name: 'Default',
  render: (args: any) => ({
    props: args,
    template: `<p style="color:var(--color-ui-textandicon-high)"> Click the toggle theme button to change between light and dark<p> <ba-theme-toggle></ba-theme-toggle>`,
  }),
};

// CUSTOM THEME TOGGLE COMPONENT STORY

export const CustomThemeSwitch: StoryObj = {
  name: 'Custom Theme Toggle Component',
  render: (args: any) => ({
    props: args,
    template: `<custom-theme-toggle></custom-theme-toggle>`,
  }),
  args: {},
};
