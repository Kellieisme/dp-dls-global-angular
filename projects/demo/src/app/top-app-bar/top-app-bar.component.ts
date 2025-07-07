import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TopAppBarComponent } from '@design/dls-global-angular/top-app-bar';
import { IconRegistryModule } from '@design/dls-global-angular/icon-registry';
import { MatDividerModule } from '@angular/material/divider';
import { UserProfileComponent } from '@design/dls-global-angular/user-profile';

@Component({
    selector: 'top-app-bar',
    imports: [TopAppBarComponent, MatButtonModule, MatIconModule, IconRegistryModule, MatMenuModule, MatDividerModule, UserProfileComponent],
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
