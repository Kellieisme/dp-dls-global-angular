import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { AtmosphereNavRailMenuItem } from './navigation-rail.types';
import { MockSideRailMenuData } from './navigation-rail.mock-data';
import { MatMenuModule } from '@angular/material/menu';

/**
 * A slim navigation rail for use on the left-hand side of an application. As
 * opposed to the Navigation Rail component, the Navigation Rail only ever
 * exists as a slim, un-expandable rail. It is, however, able to present in a
 * slightly wider format by using the `wide` flag. Likewise, the manu item
 * labels can be hidden by using the `hideLabels` flag.
 */
@Component({
    selector: 'ba-navigation-rail',
    imports: [
        CommonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        RouterOutlet,
        RouterModule,
        MatListModule,
        MatNavList,
        MatDividerModule,
        IconRegistryModule,
        MatMenuModule
    ],
    templateUrl: './navigation-rail.component.html',
    styleUrls: ['./navigation-rail.component.scss']
})
export class NavigationRailComponent {
  constructor(private cdr: ChangeDetectorRef) { }

  /**
   * Application logo
   */
  @Input() appLogo: string = '';

  /**
   * Application home route, will be added as a routerLink when clicking the logo
   */
  @Input() homeRoute: string = '/';

  /**
   * A flag telling the component to hide menu item labels. If this flag is not
   * present on the component, it will default to `false` (labels shown).
   */
  @Input({ transform: coerceBooleanProperty }) hideLabels: boolean = false;

  /**
   * A struct containing relative information for rendering the menu.
   */
  @Input() menuItems: AtmosphereNavRailMenuItem[] = MockSideRailMenuData;

  /**
   * A flag telling the component to present in wide mode (100px). If this flag
   * is not present on the component, it will default to a width of 80px.
   */
  @Input({ transform: coerceBooleanProperty }) wide: boolean = false;

  /**
 * A flag telling the component to not render a mat-sidenav-content with a router-outlet
 * Set to true when using the Navigation Rail alongside a mat-sidenav for multi-level navigation
 */
  @Input({ transform: coerceBooleanProperty }) disableSidenavContent: boolean = false;

  /**
   * The Navigation Rail component supports up to four functional components
   * aligned to the bottom of the drawer, such as a User Profile/Avatar or
   * various Icon Buttons as would be used for things like notifications or
   * settings.
   *
   * This is the FIRST of four Inputs where a developer may inject information
   * regarding the template to use and its relevant contextual data.
   *
   * Note:
   * Due to space constraints, this is NOT intended to be infinitely scalable!
   */
  @Input() navRailBottomComponent1!: TemplateRef<any>;

  /**
   * The Navigation Rail component supports up to four functional components
   * aligned to the bottom of the drawer, such as a User Profile/Avatar or
   * various Icon Buttons as would be used for things like notifications or
   * settings.
   *
   * This is the SECOND of four Inputs where a developer may inject information
   * regarding the template to use and its relevant contextual data.
   *
   * Note:
   * Due to space constraints, this is NOT intended to be infinitely scalable!
   */
  @Input() navRailBottomComponent2!: TemplateRef<any>;

  /**
   * The Navigation Rail component supports up to four functional components
   * aligned to the bottom of the drawer, such as a User Profile/Avatar or
   * various Icon Buttons as would be used for things like notifications or
   * settings.
   *
   * This is the THIRD of four Inputs where a developer may inject information
   * regarding the template to use and its relevant contextual data.
   *
   * Note:
   * Due to space constraints, this is NOT intended to be infinitely scalable!
   */
  @Input() navRailBottomComponent3!: TemplateRef<any>;

  /**
   * The Navigation Rail component supports up to four functional components
   * aligned to the bottom of the drawer, such as a User Profile/Avatar or
   * various Icon Buttons as would be used for things like notifications or
   * settings.
   *
   * This is the FOURTH of four Inputs where a developer may inject information
   * regarding the template to use and its relevant contextual data.
   *
   * Note:
   * Due to space constraints, this is NOT intended to be infinitely scalable!
   */
  @Input() navRailBottomComponent4!: TemplateRef<any>;

  @Output() itemClick = new EventEmitter<any>();


  ngOnInit() {
    this.setFirstItemActive();
  }

  /**
   * Sets the first menu item as active. This method is called to ensure
   * that the first item is selected when the component is initialized.
   *
   * Note: This method may cause an ExpressionchangedAfterItHasBeenChecked
   * if it modifies any properties that are bound to the template after Angular
   * has already checked the bindings. To avoid this, we will call
   * detectChanges() explicitly after modifying the state.
   */
  setFirstItemActive() {
    if (this.menuItems && this.menuItems.length > 0) {
      const firstItem = this.menuItems[0];
      this.onMenuItemClick(firstItem);
      this.cdr.detectChanges(); // Manually trigger the change detection to avoid errors.
    }
  }

  onMenuItemClick(item: any) {
    this.menuItems.forEach((menuItem) => {
      menuItem.toggled = false;
    });
    item.toggled = true;
    this.itemClick.emit(item);

    // Manually trigger change detection
    this.cdr.detectChanges();
  }

}
