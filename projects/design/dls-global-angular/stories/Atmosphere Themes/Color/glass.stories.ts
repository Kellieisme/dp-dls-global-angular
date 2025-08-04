import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { GlassExamplesComponent } from './glass-examples/glass-examples.component';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories



const meta: Meta = {
  title: 'FOUNDATION/Glass',
  parameters: {
    docsOnly: true, // 👈 hides this story file from the sidebar
  },
  decorators: [
    moduleMetadata({
      imports: [GlassExamplesComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj;


export const Glass: Story = {
  name: 'glass',
  render: (args) => ({
    template: `
        <app-glass-examples></app-glass-examples>
      `,
    style: ``
  })
};
