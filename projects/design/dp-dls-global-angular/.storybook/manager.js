import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';


addons.setConfig({
  theme: create({
    base: 'light', // Or 'dark'
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'ATMOSPHERE',
  brandUrl: 'https://design.pages.boeing.com/design-system/dls-global-docs/home', // Add your branding link if needed
 // brandImage: "./assets/boeing-logomark_TopAppBar_dark.svg", // Add a logo if needed
  // brandTarget: '_self',
 
  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#585C6D',
 
  // UI
  appBg: '#09090',
  appContentBg: '#fffff',
  appPreviewBg: '#fffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,
 
  // Text colors
  textColor: '#10162F',
  textInverseColor: '#fffff',
 
  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#fffff',
 
  // Form colors
  inputBg: '#fffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
     }),
});
