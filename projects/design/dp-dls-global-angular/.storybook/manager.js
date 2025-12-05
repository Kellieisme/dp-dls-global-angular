import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';


addons.setConfig({
  sidebar: {
    showRoots: false,
    collapsedRoots: ['get-started', 'installation', 'foundation', 'patterns', 'production','components', 'material-components', 'other']
  },
  theme: create({
    base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'ATMOSPHERE',
  brandUrl: '#', // Add your branding link if needed
 // brandImage: "./assets/boeing-logomark_TopAppBar_dark.svg", // Add a logo if needed
  // brandTarget: '_self',
 
  //
  // Colors from foundation tokens (dark theme)
  // colorPrimary: --foundation-interactive-primary-textandicon-primary-default
  // colorSecondary: --foundation-interactive-accent-textandicon-default
  colorPrimary: '#dde2e7',
  colorSecondary: '#84cfff',
 
  // UI - matching foundation tokens
  // appBg: --foundation-ui-background-low (dark)
  // appContentBg: --foundation-ui-background-page (dark)
  // appPreviewBg: --foundation-ui-background-page (dark)
  appBg: '#131c24',
  appContentBg: '#131c24',
  appPreviewBg: '#131c24',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,
 
  // Text colors
  // textColor: --foundation-ui-textandicon-high (dark)
  textColor: '#dde2e7',
  textInverseColor: '#1b1c1d',
 
  // Toolbar default and active colors
  barTextColor: '#9eadbb',
  barSelectedColor: '#dde2e7',
  barHoverColor: '#dde2e7',
  barBg: '#1a2631',
 
  // Form colors
  inputBg: '#23313d',
  inputBorder: '#4e6071',
  inputTextColor: '#dde2e7',
  inputBorderRadius: 2,
     }),
});
