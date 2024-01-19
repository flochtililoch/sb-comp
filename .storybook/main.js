/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  refs: {
    ref1: {
      title: "Ref1",
      url: "http://localhost:6007/",
      expanded: false,
    },
    ref2: {
      title: "Ref2",
      url: "http://localhost:6008/",
      expanded: false,
    },
  },
  staticDirs: ["../public"],
};
export default config;
