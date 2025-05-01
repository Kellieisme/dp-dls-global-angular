import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs:[{ from: "./assets", to: "/assets" }],
  addons: [
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-dark-mode",

  ],
  
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {
    defaultName: 'Overview'
  },
  typescript: {
    check: true, // Perform type-checking
  }
  
};
export default config;
