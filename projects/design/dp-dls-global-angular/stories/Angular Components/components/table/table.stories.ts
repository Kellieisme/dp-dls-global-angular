import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatTableModule } from '@angular/material/table';

export interface ScreenSize {
  size: string;
  columns: string;
  margin: string;
  gutterRelaxed: number;
  gutterCondensed: number;
}

const ELEMENT_DATA: ScreenSize[] = [
  { size: 'Extra Small', columns: '4', margin: '16', gutterRelaxed: 16, gutterCondensed: 12 },
  { size: 'Small', columns: '8', margin: '24', gutterRelaxed: 16, gutterCondensed: 12 },
  { size: 'Medium', columns: '12', margin: '24', gutterRelaxed: 20, gutterCondensed: 16 },
  { size: 'Large', columns: '12', margin: '32', gutterRelaxed: 20, gutterCondensed: 16 },
  { size: 'Large (centered)', columns: '12', margin: '200', gutterRelaxed: 20, gutterCondensed: 16 },
  { size: 'Extra large', columns: '12', margin: '32', gutterRelaxed: 24, gutterCondensed: 20 },
  { size: 'Extra large (centered)', columns: '12 (72px fixed)', margin: '%', gutterRelaxed: 24, gutterCondensed: 20 },
];

const COLUMNS: string[] = ['size', 'columns', 'margin', 'gutterRelaxed', 'gutterCondensed'];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'COMPONENTS/Table',
  decorators: [
    moduleMetadata({
      imports: [MatTableModule],
    }),
  ],
  argTypes: {},
} as Meta;

export class TablePageComponent {
  displayedColumns: string[] = ['size', 'columns', 'margin', 'gutterRelaxed', 'gutterCondensed'];
  dataSource = ELEMENT_DATA;
}

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

const template =
  `
<div class="table-container">
  <table mat-table [dataSource]="dataSource">

    <!--- Note that these columns can be defined in any order.
          The actual rendered columns are set as a property on the row definition" -->
  
    <!-- Size Column -->
    <ng-container matColumnDef="size">
      <th mat-header-cell *matHeaderCellDef> Screen size </th>
      <td mat-cell *matCellDef="let element"> {{element.size}} </td>
    </ng-container>
    
    <!-- Columns Column -->
    <ng-container matColumnDef="columns">
      <th mat-header-cell *matHeaderCellDef> Grid columns </th>
      <td mat-cell *matCellDef="let element"> {{element.columns}} </td>
    </ng-container>
  
    <!-- Margin Column -->
    <ng-container matColumnDef="margin">
      <th mat-header-cell *matHeaderCellDef> Margin </th>
      <td mat-cell *matCellDef="let element"> {{element.margin}} </td>
    </ng-container>
  
    <!-- Gutter Column -->
    <ng-container matColumnDef="gutterRelaxed">
      <th mat-header-cell *matHeaderCellDef> Gutter (relaxed) </th>
      <td mat-cell *matCellDef="let element"> {{element.gutterRelaxed}} </td>
    </ng-container>
  
    <!-- Gutter Column -->
    <ng-container matColumnDef="gutterCondensed">
      <th mat-header-cell *matHeaderCellDef> Gutter (condensed) </th>
      <td mat-cell *matCellDef="let element"> {{element.gutterCondensed}} </td>
    </ng-container>
  
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>
</div>
`

const TableTemplate: StoryObj = {
  args: {
    displayedColumns: COLUMNS,
    dataSource: ELEMENT_DATA
  }
};

export const StoryTwo: StoryObj = {
  ...TableTemplate,
  render: ({ displayedColumns, dataSource }) => ({
    props: { displayedColumns, dataSource },
    template: template
  }),
  name: 'Basic',
};