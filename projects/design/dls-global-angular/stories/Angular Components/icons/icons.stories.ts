import { MatButtonModule } from '@angular/material/button';
import { moduleMetadata, type Meta } from '@storybook/angular';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

const meta: Meta = {
  title: 'Components/Icons',

  decorators: [
    moduleMetadata({
      imports: [
        MatButtonModule
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

// export const ButtonIcons: Story = {
//   name: 'Button Icons',
//   render: (args) => ({
//     template: `
//       <div class="example-container">
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//       <path d="M6.85005 17.1498L3.65005 15.3998L4.70005 14.3498L7.20005 14.6998L11.1 10.7998L3.30005 6.5498L4.70005 5.1498L14.25 7.5998L18.175 3.7248C18.4584 3.44147 18.8125 3.2998 19.2375 3.2998C19.6625 3.2998 20.0167 3.44147 20.3001 3.7248C20.5834 4.00814 20.725 4.3623 20.725 4.7873C20.725 5.2123 20.5834 5.56647 20.3001 5.8498L16.4001 9.7498L18.85 19.2998L17.4501 20.6998L13.2 12.8998L9.30005 16.7998L9.65005 19.2998L8.60005 20.3498L6.85005 17.1498Z" fill="#1C1B1F"/>
//       </svg>
//       </div>
//     `,
//     style: '',

// })
// };
