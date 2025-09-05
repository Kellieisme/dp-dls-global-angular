import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TopAppBarComponent } from '../../../../design/dls-global-angular/top-app-bar/src/top-app-bar.component';
import { UserProfileComponent } from '../../../../design/dls-global-angular/user-profile/src/user-profile.component';

@Component({
  selector: 'top-app-bar',
  imports: [
    TopAppBarComponent,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    UserProfileComponent
  ],
  templateUrl: './top-app-bar.component.html',
  styleUrl: './top-app-bar.component.scss'
})

export class TopAppBarPageComponent {
  title = 'Top App Bar';
  tabs = [
    { label: 'Home', path: './' },
    { label: 'Level 1', path: './level-1' },
    { label: 'Level 2', path: './level-1/level-2' },
    { label: 'Level 3', path: './level-1/level-2/level-3' }
  ];
}
