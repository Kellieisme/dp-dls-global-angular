import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';

@Component({
  selector: 'app-basic-dialog',
  imports: [
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    IconRegistryModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class BasicDialogComponent {}
