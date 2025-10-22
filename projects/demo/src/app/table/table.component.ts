import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

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

@Component({
    selector: 'table-page',
    imports: [MatTableModule, MatButtonModule],
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss'
}) 

export class TablePageComponent {
  title = 'Table';
  displayedColumns: string[] = ['size', 'columns', 'margin', 'gutterRelaxed', 'gutterCondensed'];
  dataSource = ELEMENT_DATA;
}
