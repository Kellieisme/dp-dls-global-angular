import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { withThemeByClassName } from '@storybook/addon-themes';
import { applicationConfig, type Preview } from "@storybook/angular";
import { themes } from 'storybook/theming';
import 'zone.js';

// Custom decorator to handle color theme switching
const withColorTheme = (story: any, context: any) => {
  const colorTheme = context.globals.colorTheme || 'dark';
  
  if (typeof document !== 'undefined') {
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(`theme-${colorTheme}`);
    document.body.style.backgroundColor = colorTheme === 'dark' ? '#131c24' : '#eef1f3';
  }
  
  return story();
};

// Custom decorator to handle density theme switching
const withDensityTheme = (story: any, context: any) => {
  const densityTheme = context.globals.densityTheme || 'relaxed';
  
  if (typeof document !== 'undefined') {
    document.body.classList.remove('theme-relaxed', 'theme-condensed');
    document.body.classList.add(`theme-${densityTheme}`);
  }
  
  return story();
};

const decorators: Preview['decorators'] = [
  applicationConfig({
    providers: [importProvidersFrom(HttpClientModule)]
  }),
  withColorTheme,
  withDensityTheme,
];


const preview: Preview = {
  decorators: decorators,
  globalTypes: {
    colorTheme: {
      description: 'Switch between light and dark color themes',
      defaultValue: 'dark',
      toolbar: {
        title: 'Toggle Theme',
        icon: 'circlehollow',
        items: ['dark', 'light'],
        dynamicTitle: false,
      },
    },
    densityTheme: {
      description: 'Switch between relaxed and condensed density',
      defaultValue: 'relaxed',
      toolbar: {
        title: 'Toggle Density',
        icon: 'grow',
        items: ['relaxed', 'condensed'],
        dynamicTitle: false,
      },
    },
  },
  parameters: {
    options: {
      storySort: {
        order: [
          'GET STARTED',
          [
            'Introduction to Atmosphere',
            'Guides for non-Angular apps',
          ],

          'Installation',
          [
            'Get Node',
            'Create an Angular project',
            'Configure an Angular project',
            'Install Atmosphere',
            'Setting global styles and fonts',
          ],

          'Production',
          ['Local Pipeline'],

          'Foundations',
          [
            'Color Sytem',
            'Typography',
            'Icons',
            'Dimensions',
            'Themes',
            'Material Components',
            'Custom Components',
          ],
          
          'Components',
          'Services',
          'Patterns',
        ],
      },
    },
    backgrounds: { 
      default: 'dark',
      values: [
        { name: 'dark', value: '#131c24' },
        { name: 'light', value: '#eef1f3' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: 'dark',
      darkClass: 'theme-dark',
      lightClass: 'theme-light',
      stylePreview: true,
      classTarget: 'body',
      dark: { ...themes.dark, appBg: '#131c24', appContentBg: '#131c24', appPreviewBg: '#131c24' },
      light: { ...themes.light, appBg: '#eef1f3', appContentBg: '#eef1f3', appPreviewBg: '#eef1f3' },
    },
    docs: {
      theme: themes.light, // Default docs theme
    },
    themes: {
      default: 'Relaxed',
      list: [
        { name: 'Relaxed', class: 'theme-relaxed', color: '#000' },
        { name: 'Condensed', class: 'theme-condensed', color: '#888' }
      ],
    },
  },
};

export default preview;
