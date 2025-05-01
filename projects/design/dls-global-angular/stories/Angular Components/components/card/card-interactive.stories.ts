import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'COMPONENTS/Card/ Card (Interactive)',
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatCardModule],
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
    },
  },
} as Meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

/* ===========================
   Interactive Card Section
=========================== */

const CardTemplateInteractive: StoryObj = {
  args: {
    appearance: 'raised',
  },
};

// Interactive Templates , Three Columns, two Actions
const interactiveTemplateOne = `
<div class="container-fluid">
  <div class="row row-cols-1 row-cols-md-3">
    <div class="col">
      <a href="#" class="mat-card-wrapper"
        [ngClass]="{
          'mat-card-wrapper--outlined': appearance === 'outlined',
        }"
      >
        <mat-card [appearance]="appearance" [disabled]='disabled' [dragged]="dragged" class="mat-mdc-card--landscape-sm">
          <div>
            <mat-card-header>
              <mat-card-title>Card title</mat-card-title>
              <mat-card-subtitle>Subheading</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>Explain more about the topic shown in the card title and subheading through short supporting text here.</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-stroked-button color="primary">Action 2</button>
              <button mat-flat-button>Action 1</button>
            </mat-card-actions>
          </div>
        </mat-card>
      </a>
    </div>
    <div class="col">
      <a href="#" class="mat-card-wrapper"
        [ngClass]="{
          'mat-card-wrapper--outlined': appearance === 'outlined',
        }"
      >
        <mat-card [appearance]="appearance" class="mat-mdc-card--landscape-sm">
          <div>
            <mat-card-header>
              <mat-card-title>Card title</mat-card-title>
              <mat-card-subtitle>Subheading</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>Explain more about the topic shown in the card title and subheading through short supporting text here.</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-stroked-button color="primary">Action 2</button>
              <button mat-flat-button>Action 1</button>
            </mat-card-actions>
          </div>
        </mat-card>
      </a>
    </div>
    <div class="col">
      <a href="#" class="mat-card-wrapper"
        [ngClass]="{
          'mat-card-wrapper--outlined': appearance === 'outlined',
        }"
      >
        <mat-card [appearance]="appearance" class="mat-mdc-card--landscape-sm">
          <div>
            <mat-card-header>
              <mat-card-title>Card title</mat-card-title>
              <mat-card-subtitle>Subheading</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>Explain more about the topic shown in the card title and subheading through short supporting text here.</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-stroked-button color="primary">Action 2</button>
              <button mat-flat-button>Action 1</button>
            </mat-card-actions>
          </div>
        </mat-card>
      </a>
    </div>
  </div>
</div>
`;

// interactive Template two, Four columns, one action.
const interactiveTemplateTwo = `
<div class="container-fluid">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col">
      <a href="#" class="mat-card-wrapper"
        [ngClass]="{
          'mat-card-wrapper--outlined': appearance === 'outlined',
        }"
      >
        <mat-card [appearance]="appearance">
          <mat-card-header>
            <mat-card-title>Card title</mat-card-title>
            <mat-card-subtitle>Subheading</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Elaborate on the card's topic using concise supporting text</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-flat-button >Action 1</button>
          </mat-card-actions>
        </mat-card>
      </a>
    </div>
    <div class="col">
      <a href="#" class="mat-card-wrapper"
        [ngClass]="{
          'mat-card-wrapper--outlined': appearance === 'outlined',
        }"
      >
        <mat-card [appearance]="appearance">
          <mat-card-header>
            <mat-card-title>Card title</mat-card-title>
            <mat-card-subtitle>Subheading</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Elaborate on the card's topic using concise supporting text</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-flat-button >Action 1</button>
          </mat-card-actions>
        </mat-card>
      </a>
    </div>
    <div class="col">
      <a href="#" class="mat-card-wrapper"
        [ngClass]="{
          'mat-card-wrapper--outlined': appearance === 'outlined',
        }"
      >
        <mat-card [appearance]="appearance">
          <mat-card-header>
            <mat-card-title>Card title</mat-card-title>
            <mat-card-subtitle>Subheading</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Elaborate on the card's topic using concise supporting text</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-flat-button >Action 1</button>
          </mat-card-actions>
        </mat-card>
      </a>
    </div>
    <div class="col">
      <a href="#" class="mat-card-wrapper"
        [ngClass]="{
          'mat-card-wrapper--outlined': appearance === 'outlined',
        }"
      >
        <mat-card [appearance]="appearance">
          <mat-card-header>
            <mat-card-title>Card title</mat-card-title>
            <mat-card-subtitle>Subheading</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Elaborate on the card's topic using concise supporting text</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-flat-button >Action 1</button>
          </mat-card-actions>
        </mat-card>
      </a>
    </div>
  </div>
</div>
`;

const InteractiveCardWithImageTemplate = `
<div class="container-fluid">
  <div class="row align-items-start">    
    <div class="col col-12 col-md-4">
      <a href="#" class="mat-card-wrapper"
        [ngClass]="{
          'mat-card-wrapper--outlined': appearance === 'outlined',
        }"
      >
        <mat-card [appearance]="appearance">
          <img mat-card-image src="./assets/card-img-1.png" alt="Card image">
          <div>
            <mat-card-header>
              <mat-card-title>Standard Layout</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>This card displays a standard layout that includes an image, a title, and content text</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-flat-button >Action 1</button>
            </mat-card-actions>
          </div>
        </mat-card>
      </a>
    </div>

    <div class="col">
      <a href="#" class="mat-card-wrapper"
        [ngClass]="{
          'mat-card-wrapper--outlined': appearance === 'outlined',
        }"
      >
        <mat-card [appearance]="appearance" class="mat-mdc-card--landscape">
          <img mat-card-image src="./assets/card-img-1.png" alt="Card image">
          <div>
            <mat-card-header>
              <mat-card-title>Landscape Layout</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>This card features a landscape orientation, ideal for wider content. To achive this layout, ensure you include <strong> class="mat-mdc-card--landscape"</strong></p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-flat-button >Action 1</button>
          </mat-card-actions>
          </div>
        </mat-card>
      </a>
    </div>

  </div>
</div>
`

// Interactive Stories
export const InteractiveStoryOne: StoryObj = {
  ...CardTemplateInteractive,
  render: ({ appearance }) => ({
    props: { appearance },
    template: interactiveTemplateOne,
  }),
  name: 'Interactive: Three columns, two actions',
};

export const InteractiveStoryTwo: StoryObj = {
  ...CardTemplateInteractive,
  render: ({ appearance }) => ({
    props: { appearance },
    template: interactiveTemplateTwo,
  }),
  name: 'Interactive: Four columns, one action',
};

export const InteractiveCardWithImageStory: StoryObj = {
  ...CardTemplateInteractive,
  render: ({ appearance }) => ({
    props: { appearance },
    template: InteractiveCardWithImageTemplate,
  }),
  name: 'Interactive: Card with Image & Action',
};
