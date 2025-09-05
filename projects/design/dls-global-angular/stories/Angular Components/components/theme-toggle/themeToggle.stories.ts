import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ThemeToggleComponent, ThemeToggleModule } from '../../../../theme-toggle';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Services/Theme Toggle',
  component: ThemeToggleComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        RouterLink,
        ThemeToggleModule
      ]
    }),
  ],
  tags: ['autodocs']
} as Meta;

type ThemeToggleStory = StoryObj<ThemeToggleComponent>;

export const Default: ThemeToggleStory = {
  name: 'Default',
  render: (args) => ({
    props: args,
    template: `<ba-theme-toggle></ba-theme-toggle>`
  })
};


