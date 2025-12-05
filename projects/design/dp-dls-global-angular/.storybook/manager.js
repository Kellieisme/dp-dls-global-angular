import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';


addons.setConfig({
  sidebar: {
    showRoots: false,
    collapsedRoots: ['get-started', 'installation', 'foundation', 'patterns', 'production','components', 'material-components', 'other']
  },
  theme: create({
    base: 'dark',
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'ATMOSPHERE',
  brandUrl: '#',
 
  colorPrimary: '#FF4785',
  colorSecondary: '#029CFD',
 
  appBg: '#131c24',
  appContentBg: '#131c24',
  appPreviewBg: '#131c24',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,
 
  textColor: '#dde2e7',
  textInverseColor: '#1b1c1d',
 
  barTextColor: '#9eadbb',
  barSelectedColor: '#dde2e7',
  barHoverColor: '#dde2e7',
  barBg: '#1a2631',
 
  inputBg: '#23313d',
  inputBorder: '#4e6071',
  inputTextColor: '#dde2e7',
  inputBorderRadius: 2,
     }),
});
