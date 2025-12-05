import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDivider } from "@angular/material/divider";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { NewRecipientComponent } from "./new-device/new-recipient.component";
import { DeleteReasonComponent } from "./delete-reason/delete-reason.component";

export interface TableItem {
  name: string;
  status: string;
  content: string;
  user: string;
  email: string;
  application: string;
  group: string;
  platform: string;
  updated: string;
  serial: string;
}

const EXAMPLE_DATA: TableItem[] = [
  {
    name: "WP0TEST7_THATCH space",
    status: "Registered",
    content: "Current",
    user: "Olivera, Leonardo",
    email: "user@abc.com",
    application: "Test App 9.2, FD Pro 4.1, Aviator ...",
    group: "Winter route",
    platform: "Apple",
    updated: "20-Mar-2019 22:38:16",
    serial: "LX75WJQLHW",
  },
  {
    name: "SMITH_IPAD_TEST ",
    status: "Out of Contact",
    content: "Missing, Expired",
    user: "Drake, Marcus",
    email: "this@couldbeemail.com",
    application: "FD Pro 3.8, FD Pro 4.3",
    group: "3049 Group-B really long name here",
    platform: "Apple",
    updated: "18-Jan-2019 03:57:22",
    serial: "CO4904568u98709877687",
  },
  {
    name: "WP0TEST7_SMARTAIRPORTS",
    status: "Created",
    content: "Current",
    user: "Vandenberg, Thatch",
    email: "janedoe@nothing.com",
    application: "OPT, Aviator, FD Pro 4.5 ...",
    group: "Group 123ABC456",
    platform: "Apple",
    updated: "20-Mar-2019 22:38:16",
    serial: "",
  },
  {
    name: "JOES_IPAD",
    status: "Inactive",
    content: "Missing",
    user: "User, Jane",
    application: "FD Pro X 4.6.1",
    group: "Boeing Aviator Minotaur",
    platform: "Apple",
    updated: "17-Jan-2019 07:12:56",
    email: "janedoe@nothing.com",
    serial: "",
  },
  {
    name: "N438A",
    status: "Registered",
    content: "Expired",
    user: "Wilson, Rolando",
    application: "FD Pro 4.1",
    group: "Mesopotamia",
    platform: "Apple",
    updated: "12-Jun-2019 20:56:03",
    email: "janedoe@nothing.com",
    serial: "",
  },
  {
    name: "ABC-39RFDC",
    status: "Out of Contact",
    content: "Missing",
    user: "Pinkerton, Brandon",
    application: "OPT 2.1, FD Pro 4.1, Aviator ...",
    group: "TestGroup 47",
    platform: "Windows",
    updated: "24-Feb-2018 07:12:56",
    email: "janedoe@nothing.com",
    serial: "",
  },
  {
    name: "AVBIZ-THATCH-Demd0586",
    status: "Created",
    content: "Next Cycle Available",
    user: "Boden-Smith, Jennifer",
    application: "FD Pro X",
    group: "TestGroup14-admins",
    platform: "Apple",
    updated: "13-Jan-2019 22:38:16",
    email: "myvery@longemailaddress.com",
    serial: "",
  },
  {
    name: "JONES-6957F",
    status: "Out of Contact",
    content: "Unpublished Updates",
    user: "Jones, Rashida",
    application: "Test App 9.2, FD Pro 4.1, Aviator ...",
    group: "MyGroup123AVB",
    platform: "Windows",
    updated: "07-Jul-2017 03:57:22",
    email: "here@isanotheruser.com",
    serial: "",
  },
];
@Component({
  selector: 'app-template-3',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatToolbarModule, MatFormField, MatInputModule, MatIcon, MatButtonModule, MatTableModule, MatSort, MatSortHeader, MatCheckboxModule, MatPaginatorModule, MatCardModule],
  templateUrl: './template-3.component.html',
  styleUrl: './template-3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Template3Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['select', 'name', 'status', 'user', 'email', 'application', 'group', 'platform'];

  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = new MatTableDataSource<TableItem>(EXAMPLE_DATA);
  selection = new SelectionModel<TableItem>(true, []);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
  checkboxLabel(row?: TableItem): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

constructor(public dialog: MatDialog) { }

  openCreateDialog() {
    const dialogRef = this.dialog.open(NewRecipientComponent, {
width: "600px",
    });
  }

  // This is the Confirm Delete dialog
  openDeleteReason() {
    const dialogRef = this.dialog.open(DeleteReasonComponent, {
      width: "300px",
    });
  }
}
