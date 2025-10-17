import { UserProfileComponent } from '../../../../design/dp-dls-global-angular/user-profile';
import { IconRegistryModule } from '../../../../design/dp-dls-global-angular/icon-registry';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'user-profile',
    standalone: true,
    imports: [UserProfileComponent, MatButtonModule, MatIconModule, IconRegistryModule, MatMenuModule, MatDividerModule],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.scss'
})

export class UserProfilePageComponent {
  title = 'User Profile';
}
