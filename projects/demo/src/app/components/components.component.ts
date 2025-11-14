import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BreadcrumbComponent } from "@jeppesen-foreflight/dp-dls-global-angular/breadcrumb";
import { ChipsPageComponent } from '../chips/chips.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { ButtonPageComponent } from "../button/button.component";
import { DialogPageComponent } from '../dialog/dialog-page.component';
import { FormFieldComponent } from '../form-field/form-field.component';
import { MenuPageComponent } from '../menu/menu.component';
import { SelectComponent } from '../select/select.component';
import { SwitchPageComponent } from "../slide-toggle/slide-toggle.component";
import { InputComponent } from "../input/input.component";
import { TablePageComponent } from "../table/table.component";
import { MatDividerModule } from '@angular/material/divider';
import { TimePickerComponent } from "../time-picker/time-picker.component";
import { MatListModule } from '@angular/material/list';
import { SideSheetComponent } from "../sidesheet/sidesheet.component";


export interface LabelExample {
  name: string;
}
@Component({
  selector: 'app-components',
  imports: [MatListModule, MatIcon, MatDividerModule, MatButtonModule, BreadcrumbComponent, MatCardModule, ChipsPageComponent, CheckboxComponent, ButtonPageComponent, DialogPageComponent, FormFieldComponent, MenuPageComponent, SelectComponent, SwitchPageComponent, InputComponent, TablePageComponent, TimePickerComponent, SideSheetComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
  standalone: true
})
export class ComponentsComponent {
  title = 'Breadcrumb';
  breadcrumbsShort = [
    { label: 'Home', path: './' },
    { label: 'Level 1', path: './level-1' },
    { label: 'Level 2', path: './level-1/level-2' },
    { label: 'Level 3', path: './level-3/level-3' }
  ];
  breadcrumbsLong = [
    { label: 'Home', path: './' },
    { label: 'Level 1', path: './level-1' },
    { label: 'Level 2', path: './level-1/level-2' },
    { label: 'Level 3', path: './level-1/level-2/level-3' },
    { label: 'Level 4', path: './level-1/level-2/level-3/level-4' },
    { label: 'Level 5', path: './level-1/level-2/level-3/level-4/level-5' }
  ];

}
