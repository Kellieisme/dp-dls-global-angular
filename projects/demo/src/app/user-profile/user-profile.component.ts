import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { MatButtonModule } from '@angular/material/button';
import { IconRegistryModule } from '@design/dls-global-angular/icon-registry';
import { UserProfileComponent } from '@design/dls-global-angular/user-profile';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'user-profile',
    imports: [UserProfileComponent, MatButtonModule, MatIconModule, IconRegistryModule, MatMenuModule, MatDividerModule],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.scss'
})

export class UserProfilePageComponent {
  title = 'User Profile';
}
