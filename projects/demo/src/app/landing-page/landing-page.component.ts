import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbComponent } from '@dasdigitalplatform/dls-global-angular/breadcrumb';
import { TopAppBarComponent } from '@dasdigitalplatform/dls-global-angular/top-app-bar';
import { IconRegistryModule } from '@dasdigitalplatform/dls-global-angular/icon-registry';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    IconRegistryModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    BreadcrumbComponent,
    TopAppBarComponent,

  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  title = 'Flight Plan Manager';
  breadcrumbData = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/dashboard' }
  ];

  // Data for the table
  displayedColumns: string[] = ['flightNumber', 'departure', 'arrival', 'status'];
  dataSource = [
    { flightNumber: 'FL123', departure: 'New York', arrival: 'London', status: 'On Time' },
    { flightNumber: 'FL456', departure: 'Los Angeles', arrival: 'Tokyo', status: 'Delayed' },
    { flightNumber: 'FL789', departure: 'Chicago', arrival: 'Paris', status: 'Cancelled' },
    { flightNumber: 'FL101', departure: 'Miami', arrival: 'Berlin', status: 'On Time' },
    { flightNumber: 'FL202', departure: 'San Francisco', arrival: 'Sydney', status: 'On Time' }
  ];
}
