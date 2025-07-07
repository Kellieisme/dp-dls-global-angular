import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'COMPONENTS/Card/ Card (Non-Interactive)',
    decorators: [
        moduleMetadata({
        imports: [MatButtonModule, MatCardModule, MatChipsModule ],
        }),
  ],
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: 'select',
      defaultValue: 'raised',
      table: {
        defaultValue: { summary: 'raised' },
      },
      options: ['raised', 'outlined'],
    }
  },
} as Meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

/* ===========================
   Non-Interactive Card Section
=========================== */

const CardTemplateNonInteractive: StoryObj = {
  args: {
    appearance: 'raised'
  }
};

// Non-Interactive Templates
const nonInteractiveTemplateOne = `
<div class="container-fluid">
  <div class="row row-cols-1 row-cols-sm-2">
    <div class="col">
        <mat-card [appearance]="appearance">
          <mat-card-header>
            <mat-card-title>Long card title</mat-card-title>
            <mat-card-subtitle>Subheading</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Explain more about the topic shown in the card title and subheading through short supporting text here.</p>
          </mat-card-content>
        </mat-card>
    </div>
    <div class="col">
        <mat-card [appearance]="appearance">
          <mat-card-header>
            <mat-card-title>Long card title</mat-card-title>
            <mat-card-subtitle>Subheading</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Explain more about the topic shown in the card title and subheading through short supporting text here.</p>
          </mat-card-content>
        </mat-card>
    </div>
  </div>
</div>
`;

//Non-Interactive Card Template 8/4 split columns;
const nonInteractiveTemplateTwo =
  `
<div class="container-fluid">
  <!--Row-->
  <!--Interactive-->
  <!--8/4, medium up-->
  <div class="row">
    <div class="col col-12 col-md-8">
          <mat-card [appearance]="appearance">
            <mat-card-header>
              <mat-card-title>Long card title</mat-card-title>
              <mat-card-subtitle>Subheading</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
            <p>Explain more about the topic shown in the card title and subheading through short supporting text here.</p>
          </mat-card-content>
          </mat-card>
    </div>
    <div class="col col-12 col-md-4">
        <mat-card [appearance]="appearance">
          <mat-card-header>
            <mat-card-title>Card title</mat-card-title>
            <mat-card-subtitle>Subheading</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Explain more about the topic shown in the card title and subheading through short supporting text here.</p>
          </mat-card-content>
        </mat-card>
    </div>
  </div>
</div>
`;

//mat-card with footer example template
const NonInteractiveCardWithFooterTemplate = `
<div class="row">
    <div class="col col-12 col-md-6">
        <mat-card [appearance]="appearance">
            <mat-card-header>
                <mat-card-title>Card With Footer</mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <p>
                    The title above is part of the <strong>mat-card-header</strong>
                </p>
                <p>
                    This content you are reading is part of the <strong>mat-card-content</strong>
                </p>
                <p>
                    Below are the visible chips, which are part of the <strong>mat-card-footer</strong>
                </p>
            </mat-card-content>
            <mat-card-footer>
                <mat-chip-set>
                    <mat-chip>Chip 1</mat-chip>
                    <mat-chip>Chip 2</mat-chip>
                    <mat-chip>Chip 3</mat-chip>
                </mat-chip-set>
            </mat-card-footer>
        </mat-card>
    </div>
</div>
<!-- This example contains chips under <mat-card-footer> tag-->
`

const NonInteractiveCardWithImageTemplate = `
<div class="container-fluid">
  <div class="row align-items-start">    
    <div class="col col-12 col-md-4">
        <mat-card [appearance]="appearance">
          <img mat-card-image src="./assets/card-img-1.png" alt="Card image">
          <mat-card-header>
            <mat-card-title>Standard Layout</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>This card displays a standard layout that includes an image, a title, and content text</p>
          </mat-card-content>
        </mat-card>
    </div>
    <div class="col">
        <mat-card [appearance]="appearance" class="mat-mdc-card--landscape">
          <img mat-card-image src="./assets/card-img-1.png" alt="Card image">
          <div>
            <mat-card-header>
              <mat-card-title>Landscape Layout</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>This card features a landscape orientation, ideal for wider content. To achive this layout, ensure you include <strong> class="mat-mdc-card--landscape"</strong>.</p>
            </mat-card-content>
          </div>
        </mat-card>
    </div>
  </div>
</div>
`

// Non-Interactive Stories
export const NonInteractiveStoryOne: StoryObj = {
  ...CardTemplateNonInteractive,
  render: ({ appearance }) => ({
    props: { appearance },
    template: nonInteractiveTemplateOne
  }),
  name: 'Non-Interactive: Two columns',
};

export const NonInteractiveStoryTwo: StoryObj = {
  ...CardTemplateNonInteractive,
  render: ({ appearance }) => ({
    props: { appearance },
    template: nonInteractiveTemplateTwo
  }),
  name: 'Non Interactive: 8/4 split columns',
};

export const NonInteractiveCardWithFooterStory: StoryObj = {
  ...CardTemplateNonInteractive,
  render: ({ appearance }) => ({
    props: { appearance },
    template: NonInteractiveCardWithFooterTemplate
  }),
  name: 'Non Interactive: Card With Footer',
};

export const NonInteractiveCardWithImageStory: StoryObj = {
  ...CardTemplateNonInteractive,
  render: ({ appearance }) => ({
    props: { appearance },
    template: NonInteractiveCardWithImageTemplate
  }),
  name: 'Non Interactive: Card With Image',
};




