import { moduleMetadata, type Meta } from '@storybook/angular';
import { ChartExamplesComponent } from './chart-examples/chart-examples.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

const meta: Meta = {
  title: 'Components/Charts',
  parameters: {
    hidden: true,
  },
  decorators: [
    moduleMetadata({
      imports: [
        ChartExamplesComponent
      ],
    }),
  ],
};

export default meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
// type Story = StoryObj;

// export const Bar: Story = {
//   name: 'Bar Chart',
//   render: (args) => ({
//     template: `
//       <div class="example-container">
//         <lib-chart-examples></lib-chart-examples>
//       </div>
//     `,
//     style: '',

// })
// };
