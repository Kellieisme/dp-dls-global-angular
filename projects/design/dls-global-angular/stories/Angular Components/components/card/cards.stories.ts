import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

export default {
  title: 'COMPONENTS/Cards',
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatCardModule, MatChipsModule],
    }),
  ],
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: 'select',
      options: ['raised', 'outlined'],
      defaultValue: 'raised',
    },
    columns: {
      description: 'Number of columns',
      control: 'select',
      options: [1, 2, 3, 4, 6],
      defaultValue: 3,
    },
    columnCombination: {
      description: 'Select column size combination',
      control: 'select',
      options: [
        'md-6, md-6', // Equal columns
        'md-4, md-8', // 4:8 ratio
        'md-8, md-4', // 8:4 ratio
        'md-3, md-9', // 3:9 ratio
        'md-9, md-3', // 9:3 ratio
        'md-2, md-10', // 2:10 ratio
        'md-10, md-2', // 10:2 ratio
        'md-5, md-7', // 4:12 ratio
        'md-7, md-15', // 12:4 ratio
      ],
    },
    rows: {
      description: 'Number of rows',
      control: 'select',
      options: [1, 2],
      defaultValue: 1,
    },
    actions: {
      description: 'Number of actions',
      control: 'select',
      options: [1, 2],
      defaultValue: 2,
    },
    buttonType: {
      description: 'Type of action button',
      control: 'select',
      options: ['mat-flat-button', 'mat-stroked-button'],
      defaultValue: 'mat-flat-button',
    },
  }
} as Meta;


//Cards Sample

export const SimpleCards: StoryObj = {
  name: 'Basic Cards',
  args: {
    appearance: 'raised',
    columns: 3,
    rows: 1,
  },
  argTypes:{
    columnCombination: { table: { disable: true}},
    actions: { table: { disable: true }},
    buttonType: { table: { disable: true }},
  },
  render: ({ appearance, columns, rows }) => {
    const totalCards = columns * rows;
    const cardData = Array.from({ length: totalCards }, (_, index) => ({
      title: `Card title ${index + 1}`,
      subtitle: 'Subheading',
      content: 'Explain more about the topic shown in the card title and subheading through short supporting text here.',
    }));

    return {
      template: `
        <div class="container-fluid">
          <div class="row row-cols-1 row-cols-md-${columns}">
            <div class="col" *ngFor="let card of cardData">
              <mat-card [appearance]="appearance">
                <mat-card-header>
                  <mat-card-title>{{ card.title }}</mat-card-title>
                  <mat-card-subtitle>{{ card.subtitle }}</mat-card-subtitle>
                </mat-card-header>
                <mat-card-content>
                  <p>{{ card.content }}</p>
                </mat-card-content>
              </mat-card>
            </div>
          </div>
        </div>
      `,
      props: { cardData, appearance },
    };
  },
};

export const CardWithActionButtons: StoryObj = {
  name: 'Cards with Action Buttons',
  args: {
    appearance: 'raised',
    columns: 3,
    rows: 1,
    actions: 2,
    buttonType: 'mat-flat-button',
  },
  argTypes:{
    columnCombination: { table: { disable: true}},
  },
  render: ({ appearance, columns, rows, actions, buttonType }) => {
    const totalCards = columns * rows;
    const cardData = Array.from({ length: totalCards }, (_, index) => ({
      title: `Card title ${index + 1}`,
      subtitle: 'Subheading',
      content: 'Explain more about the topic shown in the card title and subheading through short supporting text here.',
      actions: Array.from({ length: actions }, (_, i) => `Action ${i + 1}`),
    }));

    return {
      template: `
        <div class="container-fluid">
          <div class="row row-cols-1 row-cols-md-${columns}">
            <div class="col" *ngFor="let card of cardData">
              <mat-card [appearance]="appearance">
                <mat-card-header>
                  <mat-card-title>{{ card.title }}</mat-card-title>
                  <mat-card-subtitle>{{ card.subtitle }}</mat-card-subtitle>
                </mat-card-header>
                <mat-card-content>
                  <p>{{ card.content }}</p>
                </mat-card-content>
                <mat-card-actions>
                  <ng-container *ngFor="let action of card.actions">
                    <button ${buttonType}>{{ action }}</button>
                  </ng-container>
                </mat-card-actions>
              </mat-card>
            </div>
          </div>
        </div>
      `,
      props: { cardData, appearance, buttonType },
    };
  },
};

//Non Interactive: Card With Footer

export const CardWithFooterStory: StoryObj = {
  name: 'Card With Footer',
  args: {
    appearance: 'raised',
  },
  argTypes:{
    columnCombination: { table: { disable: true}},
    actions: { table: { disable: true }},
    buttonType: { table: { disable: true }},
    columns: { table: { disable: true}},
    rows: { table: { disable: true }}
  },
  render: ({ appearance }) => {
    return {
      template: `
      <div class="row">
          <div class="col col-12 col-md-4">
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
      `,
      props: { appearance },
    };
  },
};


export const CardWithCustomizableColumnSize: StoryObj = {
  name: 'Card: Customizable Column Size',
  args: {
    appearance: 'raised',
    columnCombination: 'md-6, md-6', // Default to equal columns
  },
  argTypes:{
    columns: { table: { disable: true }},
    rows: { table: { disable: true }},
    actions: { table: { disable: true }},
    buttonType: { table: { disable: true }},
  },
  render: ({ appearance, columnCombination }) => {
    const [col1, col2] = columnCombination.split(', ').map( (size:any) => size.trim());
    const cardData = Array.from({ length: 2 }, (_, index) => ({
      title: `Card title ${index + 1}`,
      subtitle: 'Subheading',
      content: 'Explain more about the topic shown in the card title and subheading through short supporting text here.',
    }));

    return {
      template: `
        <div class="container-fluid">
          <div class="row">
            <div class="col col-12 col-${col1}">
              <mat-card [appearance]="appearance">
                <mat-card-header>
                  <mat-card-title>{{ cardData[0].title }}</mat-card-title>
                  <mat-card-subtitle>{{ cardData[0].subtitle }}</mat-card-subtitle>
                </mat-card-header>
                <mat-card-content>
                  <p>{{ cardData[0].content }}</p>
                </mat-card-content>
              </mat-card>
            </div>
            <div class="col col-12 col-${col2}">
              <mat-card [appearance]="appearance">
                <mat-card-header>
                  <mat-card-title>{{ cardData[1].title }}</mat-card-title>
                  <mat-card-subtitle>{{ cardData[1].subtitle }}</mat-card-subtitle>
                </mat-card-header>
                <mat-card-content>
                  <p>{{ cardData[1].content }}</p>
                </mat-card-content>
              </mat-card>
            </div>
          </div>
        </div>
      `,
      props: { cardData, appearance },
    };
  },
};



export const InteractiveClickableCard: StoryObj = {
  name: "Cards(Interactive): clickable entire card",
  args: {
    appearance: 'raised',
    columns: 3,
    rows: 1,
  },
  argTypes:{
    columnCombination: { table: { disable: true}},
    actions: { table: { disable: true }},
    buttonType: { table: { disable: true }},
  },
  render: ({ appearance, columns, rows }) => {
    const totalCards = columns * rows;
    const cardData = Array.from({ length: totalCards }, (_, index) => ({
      title: `Card title ${index + 1}`,
      subtitle: 'Subheading',
      content: 'Explain more about the topic shown in the card title and subheading through short supporting text here.',
    }));

    return {
      template: `
        <div class="container-fluid">
          <div class="row row-cols-1 row-cols-md-${columns}">
            <div class="col" *ngFor="let card of cardData">
              <a href="#"  class="mat-card-wrapper" [ngClass]="{'mat-card-wrapper--outlined': appearance === 'outlined'}">
                <mat-card [appearance]="appearance">
                  <mat-card-header>
                    <mat-card-title>{{ card.title }}</mat-card-title>
                    <mat-card-subtitle>{{ card.subtitle }}</mat-card-subtitle>
                  </mat-card-header>
                  <mat-card-content>
                    <p>{{ card.content }}</p>
                  </mat-card-content>
                </mat-card>
              </a>
            </div>
          </div>
        </div>
      `,
      props: { cardData, appearance },
    };
  },
};



export const CardWithStandardLayoutImage: StoryObj = {
  name: 'Card with Standard Image',
  args: {
    appearance: 'raised',
    columns: 4,
    rows: 1,
    buttonType: 'mat-flat-button',
  },
  argTypes:{
    columnCombination: { table: { disable: true}},
    actions: { table: { disable: true }},
  },
  render: ({ appearance, columns, rows, buttonType }) => {
    const totalCards = columns * rows;
    const cardData = Array.from({ length: totalCards }, (_, index) => ({
      image: './assets/card-img-1.png', // Adjust the image path as necessary
    }));

    return {
      template: `
        <div class="container-fluid">
          <div class="row row-cols-1 row-cols-md-${columns}">
            <div class="col" *ngFor="let card of cardData">
                <mat-card [appearance]="appearance">
                  <img mat-card-image [src]="card.image" alt="Card image">
                  <mat-card-header>
                    <mat-card-title>Standard Layout</mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <p>This card displays a standard layout that includes an image, a title, and content text</p>
                  </mat-card-content>
                  <mat-card-actions>
                    <button ${buttonType}>Action 1</button>
                  </mat-card-actions>
                </mat-card>
            </div>
          </div>
        </div>
      `,
      props: { cardData, appearance, buttonType },
    };
  },
};


export const CardWithLandscapeLayout: StoryObj = {
  name: 'Card Interactive: Landscape Layoute with Image',
  args: {
    appearance: 'raised',
    columns: 2,
    rows: 1,
  },
  argTypes:{
    columnCombination: { table: { disable: true}},
    actions: { table: { disable: true }},
    columns: {
      description: 'Number of columns',
      control: 'select',
      options: [1, 2],
      defaultValue: 2,
    },
    buttonType: { table: { disable: true }},
  },
  render: ({ appearance, columns, rows }) => {
    const totalCards = columns * rows;
    const cardData = Array.from({ length: totalCards }, (_, index) => ({
      image: './assets/card-img-1.png', // Adjust the image path as necessary
    }));

    return {
      template: `
        <div class="container-fluid">
          <div class="row row-cols-1 row-cols-md-${columns}">
            <div class="col" *ngFor="let card of cardData">
             <a href="#" class="mat-card-wrapper"
                [ngClass]="{
                  'mat-card-wrapper--outlined': appearance === 'outlined',
                }"
              >
                <mat-card [appearance]="appearance" class="mat-mdc-card--landscape">
                  <img mat-card-image src="./assets/card-img-1.png" alt="Card image">
                  <div >
                    <mat-card-header>
                      <mat-card-title>Landscape Layout</mat-card-title>
                    </mat-card-header>
                    <mat-card-content>
                      <p>This card features a landscape orientation, ideal for wider content. To achive this layout, ensure you include <strong> class="mat-mdc-card--landscape"</strong></p>
                    </mat-card-content>
                  </div>
                </mat-card>
              </a>
            </div>
          </div>
        </div>
      `,
      props: { cardData, appearance },
    };
  },
};
