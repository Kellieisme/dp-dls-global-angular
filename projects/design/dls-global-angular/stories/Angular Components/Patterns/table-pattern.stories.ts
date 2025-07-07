import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

interface ScreenSize {
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

//const COLUMNS: string[] = ['select', 'size', 'columns', 'margin', 'gutterRelaxed', 'gutterCondensed'];

@Component({
    selector: 'table-selection-pattern',
    template: `
    <div class="table-container">
      <table mat-table [dataSource]="dataSource" matSort>
        <!-- Checkbox Column -->
        <ng-container matColumnDef="select">
          <th mat-header-cell *matHeaderCellDef>
            <mat-checkbox (change)="$event ? toggleAllRows() : null"
                          [checked]="selection.hasValue() && isAllSelected()"
                          [indeterminate]="selection.hasValue() && !isAllSelected()"
                          [aria-label]="checkboxLabel()">
            </mat-checkbox>
          </th>
          <td mat-cell *matCellDef="let row">
            <mat-checkbox (click)="$event.stopPropagation()"
                          (change)="$event ? selection.toggle(row) : null"
                          [checked]="selection.isSelected(row)"
                          [aria-label]="checkboxLabel(row)">
            </mat-checkbox>
          </td>
        </ng-container>

        <!-- Size Column -->
        <ng-container matColumnDef="size">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by screen size"> Screen size </th>
          <td mat-cell *matCellDef="let element"> {{element.size}} </td>
        </ng-container>
        
        <!-- Columns Column -->
        <ng-container matColumnDef="columns">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by grid columns"> Grid columns </th>
          <td mat-cell *matCellDef="let element"> {{element.columns}} </td>
        </ng-container>
      
        <!-- Margin Column -->
        <ng-container matColumnDef="margin">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by margin"> Margin </th>
          <td mat-cell *matCellDef="let element"> {{element.margin}} </td>
        </ng-container>
      
        <!-- Gutter Column -->
        <ng-container matColumnDef="gutterRelaxed">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by gutter (relaxed)"> Gutter (relaxed) </th>
          <td mat-cell *matCellDef="let element"> {{element.gutterRelaxed}} </td>
        </ng-container>
      
        <!-- Gutter Column -->
        <ng-container matColumnDef="gutterCondensed">
          <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by gutter (condensed)"> Gutter (condensed) </th>
          <td mat-cell *matCellDef="let element"> {{element.gutterCondensed}} </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"
            (click)="selection.toggle(row)">
        </tr>
      </table>
    </div>
  `,
    standalone: false
})

export class TableSelectionComponent implements AfterViewInit {
  displayedColumns: string[] = ['select', 'size', 'columns', 'margin', 'gutterRelaxed', 'gutterCondensed'];
  dataSource = new MatTableDataSource<ScreenSize>(ELEMENT_DATA);
  selection = new SelectionModel<ScreenSize>(true, []);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ScreenSize): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.size + 1}`;
  }

}

export default {
  title: 'Patterns/Tables',
  decorators: [
    moduleMetadata({
      declarations: [TableSelectionComponent],
      imports: [BrowserAnimationsModule, MatTableModule, MatCheckboxModule, MatSortModule],
    }),
  ],
  argTypes: {},
} as Meta;

export const TableSelectionTemplate: StoryObj = {
  name: 'Multi-select with sort',
  render: (args) => ({
    props: {
      args,
    },
    template: `
      <table-selection-pattern></table-selection-pattern>
    `,
  }),
};

