import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormComponent } from '../form/form.component';
import { ListPageComponent } from '../list/list.component';

@Component({
  selector: 'app-template-2',
  imports: [ListPageComponent, FormComponent, MatTabsModule, MatIconModule, MatToolbarModule, MatListModule, MatFormFieldModule, MatInputModule],
  templateUrl: './template-2.component.html',
  styleUrl: './template-2.component.scss'
})
export class Template2Component {

}
