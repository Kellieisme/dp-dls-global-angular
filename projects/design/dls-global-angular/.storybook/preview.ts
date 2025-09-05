import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { withThemeByClassName } from '@storybook/addon-themes';
import { applicationConfig, type Preview } from "@storybook/angular";
import { themes } from '@storybook/theming';
import 'zone.js';

const decorators: Preview['decorators'] = [
  applicationConfig({
    providers: [importProvidersFrom(HttpClientModule)]
  }),
  withThemeByClassName({
    themes: {
      relaxed: 'theme-relaxed',
      condensed: 'theme-condensed',
    },
    defaultTheme: 'relaxed', // Default layout theme
    parentSelector: 'body',
  }),
];


const preview: Preview = {
  decorators: decorators,
  parameters: {
    options: {
      storySort: {
        order: [
          'GET STARTED',
          [
            'Introduction to Atmosphere',
            'Guides for non angular usage',
          ],

          'INSTALLATION',
          [
            'Get Node',
            'Create an Angular Project',
            'Configure an Angular Project',
            'Install Atmosphere',
            'Setting Global Styles and Fonts',
          ],

          'PRODUCTION',
          ['Local Pipeline'],

          'FOUNDATION',
          [
            'Color Sytem',
            'Typography',
            'Icons',
            'Dimensions',
            'Themes',
            'Material Components',
            'Custom Components',
          ],
          
          'COMPONENTS',
          'SERVICES',
          'PATTERNS',
        ],
      },
    },
    backgrounds: { disable: true },
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
      parentSelector: 'body',
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
