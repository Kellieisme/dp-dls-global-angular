import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home.component';
import { ButtonPageComponent } from './button/button.component';
import { ListPageComponent } from './list/list.component';
import { BreadcrumbPageComponent } from './breadcrumb/breadcrumb.component';
import { MenuPageComponent } from './menu/menu.component';
import { CardPageComponent } from './card/card.component';
import { NavigationDrawerPageComponent } from './navigation-drawer-page/navigation-drawer-page.component';
import { TopAppBarPageComponent } from './top-app-bar/top-app-bar.component';
import { TabsPageComponent } from './tabs/tabs.component';
import { DialogPageComponent } from './dialog/dialog-page.component';
import { RadioComponent } from './radio/radio.component';
import { TablePageComponent } from './table/table.component';
import { UserProfilePageComponent } from './user-profile/user-profile.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SwitchPageComponent } from './slide-toggle/slide-toggle.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { TooltipPageComponent } from './tooltip/tooltip.component';
import { ChipsPageComponent } from './chips/chips.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TypographyComponent } from './typography/typography.component';
import { GlassExamplesComponent } from './glass-examples/glass-examples.component';
import { Template3Component } from './template-3/template-3.component';
import { Template2Component } from './template-2/template-2.component';
import { Template4Component } from './template-4/template-4.component';
import { BadgeComponent } from './badge/badge.component';
import { SnackbarPageComponent } from './snackbar/snackbar.component';    
import { ComponentsComponent } from './components/components.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent },
  { path: 'button', component: ButtonPageComponent},
  { path: 'navigation-drawer', component: NavigationDrawerPageComponent},
  { path: 'card', component: CardPageComponent},
  { path: 'components', component: ComponentsComponent },
  { path: 'top-app-bar', component: TopAppBarPageComponent},
  { path: 'tabs', component: TabsPageComponent},
  { path: 'menu', component: MenuPageComponent},
  { path: 'dialog', component: DialogPageComponent},
  { path: 'radio', component: RadioComponent},
  { path: 'table', component: TablePageComponent},
  { path: 'user-profile', component: UserProfilePageComponent},
  { path: 'checkbox', component: CheckboxComponent},
  { path: 'switch', component: SwitchPageComponent},
  { path: 'form-field', component: FormFieldComponent},
  { path: 'input', component: InputComponent},
  { path: 'select', component: SelectComponent},
  { path: 'tooltip', component: TooltipPageComponent},
  { path: 'chips', component: ChipsPageComponent},
  { path: 'progress-indicators', component: ProgressIndicatorComponent},
  { path: 'list', component: ListPageComponent},
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'template-2', component: Template2Component},
  { path: 'template-3', component: Template3Component},
  { path: 'template-4', component: Template4Component},
  { path: 'badge', component: BadgeComponent},
  { path: 'snackbar', component: SnackbarPageComponent},
  { path: 'typography', component: TypographyComponent},
  { path: 'glass', component: GlassExamplesComponent},
  { path: 'breadcrumb', redirectTo: '/level-1', pathMatch: 'full' },
  { path: 'breadcrumb/level-1', component: BreadcrumbPageComponent, data: { breadcrumb: 'Level 1' } },
  { path: 'breadcrumb/level-1/level-2', component: BreadcrumbPageComponent, data: { breadcrumb: 'Level 2' } },
  { path: 'breadcrumb/level-1/level-2/level-3', component: BreadcrumbPageComponent, data: { breadcrumb: 'Level 3' } },
  { path: 'breadcrumb/level-1/level-2/level-3/level-4', component: BreadcrumbPageComponent, data: { breadcrumb: 'Level 4' } },
  { path: 'breadcrumb/level-1/level-2/level-3/level-4/level-5', component: BreadcrumbPageComponent, data: { breadcrumb: 'Level 5' } },
  {
    path: "**",
    redirectTo: 'home'
  }
];
