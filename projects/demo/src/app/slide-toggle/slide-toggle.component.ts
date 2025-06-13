import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
    selector: 'slide-toggle-page',
    imports: [MatSlideToggleModule],
    templateUrl: './slide-toggle.component.html',
    styleUrl: './slide-toggle.component.scss'
})

export class SwitchPageComponent {}