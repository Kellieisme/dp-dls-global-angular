import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { IconRegistryModule } from '@dasdigitalplatform/dls-global-angular/icon-registry';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MockSidebarMenuData } from './navigation-drawer.mock-menu-data';
import {
  AtmosphereNavDrawerMenu,
  AtmosphereNavDrawerVariant,
} from './navigation-drawer.types';

/**
 * An enum denoting the different possible variants for the navigation drawer
 * and the side navigation mode.
 *
 * These can keep us from having a number of "magic strings" sprinkled in the
 * code below and repeated for various evaluations.
 *
 * While this enum is available for comparisons, the component input
 * `navDrawerPresentation` uses the `AtmosphereNavDrawerVariant` type, which is
 * a union of strings.
 *
 * Acceptable variants are `default`, `standalone`, and `modal`.
 *
 */
export enum NavDrawerPresentationEnum {
  DEFAULT = 'default', // default, for use with top bar...unbranded
  STANDALONE = 'standalone', // with logo
  MODAL = 'modal', // hovering, with drop shadow and a screen behind
}

// looks like this is whether it's collapsible or not...
// could have the default be collapsible, and the `fixed` flag passed if not
enum SideNavMode { // gotta figure out what these do...
  SIDE = 'side',
  OVER = 'over',
  PUSH = 'push',
}

/**
 * Some handy-dandy type definitions for the above enums.
 */
type SideNavigationModeType = `${SideNavMode}`;

/**
 * The Navigation Drawer component represents a left-hand navigation drawer that
 * can conidtionally collapse/expand on hover, be presented as a modal, or be
 * locked open. It is available branded and unbranded, to account for the
 * respective absence or presence of a top bar.
 *
 * The expected behavior for non-modal variants is as follows: Upon page load,
 * the drawer shall appear in its collapsed state. Upon hovering over a manu
 * item, the drawer will expand, and it will collapse when losing focus. If
 * the user drags the drawer open or selects a menu item, then we treat this as
 * an action with intent, and the drawer does NOT collapse on blur.
 *
 * There are a few key properties to be aware of:
 *
 * `navDrawerPresentation` will determine whether or not the navigation drawer
 * renders as the default (unbranded, for use with a top bar) version, the
 * standalone (branded) version, or the modal version. Acceptable values for
 * this input are, intuitively, `default`, `standalone`, or `modal`. If this
 * input is not set, then the component will render as `default`
 *
 * `opened` is a flag that will dictate whether the drawer is opened or
 * closed. This value defaults to `false` and is generally left off when
 * instantiating the component.
 *
 * `fixedOpen` is a flag that can can be added to the component instatiation in
 * a similar manner to `opened`. This flag will tell the drawer to never
 * collapse down to a minified state, and is inteded for use in specific
 * applications where the design necessitates an 'always open' drawer.
 *
 */
@Component({
    selector: 'ba-navigation-drawer',
    imports: [
        CommonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        RouterOutlet,
        RouterModule,
        MatListModule,
        RouterModule,
        MatNavList,
        MatDividerModule,
        MatMenuModule,
        IconRegistryModule,
    ],
    templateUrl: './navigation-drawer.component.html',
    styleUrls: ['./navigation-drawer.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavigationDrawerComponent implements OnDestroy {

  ngOnInit() {
    this.setFirstItemActive();
  }

  setFirstItemActive() {
    if (this.navDrawerMenuItems && this.navDrawerMenuItems.length > 0) {
      const firstItem = this.navDrawerMenuItems[0];
      if (firstItem.sectionMenuItems && firstItem.sectionMenuItems.length > 0) {
        this.onMenuItemClick(firstItem.sectionMenuItems[0]);
        if(this.sidenavMode !== 'over') {
        this.opened = false;
        }
      }
    }
  }
  /**
   * @ignore
   */
  mobileQuery: MediaQueryList;

  /**
   * @ignore
   */
  @ViewChild('sidenav', { read: ElementRef }) sidenavElement!: ElementRef;

  /*****************************************************************************
                                 CONSTRUCTOR
  *****************************************************************************/

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  /*****************************************************************************
                                  PROPERTIES
  *****************************************************************************/

  /**
   * When not in MODAL mode, we want the drawer to collapse on mouse-out and on
   * selection of a menu item... UNLESS the drawer has already been manually
   * dragged open. We count such a state as an "intentional open" and respect
   * that the user deliberately expanded the drawer. This flag provides us a
   * check for such cases, and is used in conditional logic within the template.
   */
  intentionalOpen: boolean = false;

  /**
   * PRIVATE
   *
   * Is the drawer currently being dragged around?
   *
   * @ignore
   */
  #isDragging: boolean = false;

  /**
   * Determines if a menu item was clicked. Not sure we need this one.
   *
   * @ignore
   */
  isMenuItemClicked: boolean = false;

  /**
   * PRIVATE
   *
   * The starting width for the drawer. Ostensibly used in dragging, but
   * uncertain if this is still required. Code has moved away from using JS
   * animation and towards capitalizing on Material's `opened` property and
   * premade transforms.
   *
   * @todo Ascertain the above and remove if necessary.
   *
   * @ignore
   */
  #startWidth: number = 0;

  /**
   * PRIVATE
   *
   * The starting X-position for the drawer. Ostensibly used in dragging, but
   * uncertain if this is still required. Code has moved away from using JS
   * animation and towards capitalizing on Material's `opened` property and
   * premade transforms.
   *
   * @todo Ascertain the above and remove if necessary.
   *
   * @ignore
   */
  #startX: number = 0;

  /**
   * Since our `NavDrawerPresentationEnum` is used for evaluations not only in
   * our class code, but also in our template, we need to expose it publicly on
   * our class.
   */
  public NavDrawerPresentationEnum = NavDrawerPresentationEnum;

  /*****************************************************************************
                                     INPUTS
  *****************************************************************************/

  /**
   * The application logo, used when the Nav Drawer is rendered in its
   * STANDALONE configuration.
   */
  @Input() appLogo: string = '';

  /**
   * The application name, used when the Nav Drawer is rendered in its
   * STANDALONE configuration.
   */
  @Input() appName: string = 'App name';

  /**
   * Application home route, will be added as a routerLink when clicking the logo
   */
  @Input() homeRoute: string = '/';

  /**
   * Sets the width for the drawer when in its collapsed state.
   *
   * Leaving this here, as we may have use for it at some point, but let's make
   * it an undocumented Input for now.
   *
   * @ignore
   */
  @Input() collapsedWidth: string = '80px';

  /**
   * Sets the width for the drawer when in its expanded state.
   *
   * Leaving this here, as we may have use for it at some point, but let's make
   * it an undocumented Input for now.
   *
   * @ignore
   */
  @Input() expandedWidth: string = '360px';

  /**
   * An input flag denoting whether or not the Nav Drawer should never
   * collapse down to a minified state, and is intended for use in specific
   * applications where the design necessitates an 'always open' drawer.
   */
  @Input({ transform: coerceBooleanProperty }) fixedOpen: boolean = false;

  /**
   * An input flag denoting whether or not the Nav Drawer should show a minified
   * (thin) presentation when collapsed
   */
  @Input({ transform: coerceBooleanProperty }) minifyOnCollapse: boolean =
    false;

  /**
   * The Navigation Drawer component supports up to four functional components
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
  @Input() navBarBottomComponent1!: TemplateRef<any>;

  /**
   * The Navigation Drawer component supports up to four functional components
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
  @Input() navBarBottomComponent2!: TemplateRef<any>;

  /**
   * The Navigation Drawer component supports up to four functional components
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
  @Input() navBarBottomComponent3!: TemplateRef<any>;

  /**
   * The Navigation Drawer component supports up to four functional components
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
  @Input() navBarBottomComponent4!: TemplateRef<any>;

  /**
   * Menu items for the navdrawer
   */
  @Input() navDrawerMenuItems: AtmosphereNavDrawerMenu = MockSidebarMenuData;

  /**
   * An input flag denoting whether or not the Navigation Drawer presents in its
   * DEFAULT configuration (no branding, assuming the presence of an Application
   * Top Bar component on the page), it's STANDALONE configuration (with
   * branding), or as a MODAL.
   */
  @Input() navDrawerPresentation: AtmosphereNavDrawerVariant =
    NavDrawerPresentationEnum.DEFAULT;

  /**
   * A direct map to Angular Material's `opened` property of the `Side Nav`
   * component which this drawer is built on top of. Setting `opened` to `true`
   * or `false` expands and contracts the drawer, respectively, using the CSS
   * transforms that Material created under the hood.
   *
   * It is advisable to use this property instead of custom javascript
   * animations to facilitate the expansion/collapse becase additional ARIA
   * properties and classes are predicated on this component state marker.
   */
  @Input({ transform: coerceBooleanProperty }) opened: boolean = true;

  /*****************************************************************************
                                     METHODS
  *****************************************************************************/

  /**
   * Starts dragging, adds necessary event listeners, and appropriately sets
   * the relevant flags.
   */
  startDragging(event: MouseEvent | TouchEvent) {
    this.#isDragging = true;
    this.#startX =
      event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    this.#startWidth = this.sidenavElement.nativeElement.offsetWidth;

    document.addEventListener('mousemove', this.drag.bind(this));
    document.addEventListener('touchmove', this.drag.bind(this));
    document.addEventListener('mouseup', this.stopDragging.bind(this));
    document.addEventListener('touchend', this.stopDragging.bind(this));
  }

  /**
   * Facilitates the snapping of the drag when the user drags past a certain
   * point.
   *
   * @todo This could probably be looked at a bit more closely and maybe cleaned up a bit.
   */
  drag(event: MouseEvent | TouchEvent) {
    if (!this.#isDragging) return;
    const currentX =
      event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    if (currentX <= parseInt(this.expandedWidth) - 100) {
      this.opened = false;
      this.isMenuItemClicked = false;
    } else if (currentX >= parseInt(this.expandedWidth)) {
      this.opened = true;
    }
  }

  /**
   * Stops dragging, removes necessary event listeners, and appropriately sets
   * the relevant flags.
   */
  stopDragging() {
    //
    this.#isDragging = false;

    document.removeEventListener('mousemove', this.drag.bind(this));
    document.removeEventListener('touchmove', this.drag.bind(this));
    document.removeEventListener('mouseup', this.stopDragging.bind(this));
    document.removeEventListener('touchend', this.stopDragging.bind(this));

    const currentWidth = this.sidenavElement.nativeElement.offsetWidth;
    const collapsedWidth = parseInt(this.collapsedWidth);
    const expandedWidth = parseInt(this.expandedWidth);

    if (currentWidth > collapsedWidth) {
      this.intentionalOpen = true;
      this.opened = true;
    } else if (currentWidth < expandedWidth) {
      this.intentionalOpen = false;
      this.opened = false;
    }
  }

  // isMenuItemClicked = false;

  /**
   * @ignore
   */
  private _mobileQueryListener: () => void;

  /**
   * Handles removal of event listeners on destruction of a component instance.
   */
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  /**
   * Do we actually need this, or is it just there to satisfy storybook/QA?
   *
   * I can't think offhand My tof a scenario in which we would want to reset all
   * toggled states if a menu item is selected...
   *
   * On speaking with Rahul, it also sounds as though we also only want the
   * drawer to collapse when an item is selected IF the user did not manually
   * open the drawer via drag.
   *
   * @param item
   */
  onMenuItemClick(item: any) {
    this.isMenuItemClicked = true;
    this.intentionalOpen = true;
    this.opened = true;
    // Reset toggled state for all items including child items
    const resetToggledState = (menuItems: any[]) => {
      menuItems.forEach((menuItem) => {
        if (menuItem.sectionMenuItems) {
          resetToggledState(menuItem.sectionMenuItems);
        } else {
          menuItem.toggled = false;
        }
        if (menuItem.children) {
          resetToggledState(menuItem.children);
        }
      });
    };
    resetToggledState(this.navDrawerMenuItems);
    item.toggled = true;
  }

  /**
   * Toggles the expanded/collapsed state of a menu item that contains children
   *
   * @param item
   */
  toggleSubMenu(item: any): void {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }

  /*****************************************************************************
                                    ACCESSORS
  *****************************************************************************/

  /**
   * Returns the sidenav mode with respect to underlying content. (OVER, SIDE,
   * or PUSH)
   */
  get sidenavMode(): SideNavigationModeType {
    return this.mobileQuery.matches ||
      this.navDrawerPresentation === NavDrawerPresentationEnum.MODAL
      ? SideNavMode.OVER
      : SideNavMode.SIDE;
  }

  /**
   * Returns a boolean denoting if a given presentation of the Nav Drawer is
   * draggable. To arrive at this boolean, we look at both the presentation enum
   * and a whether or not the component is delcared as `fixedOpen`.
   */
  get isDraggable(): boolean {
    return (
      this.navDrawerPresentation !== NavDrawerPresentationEnum.MODAL &&
      !this.fixedOpen
    );
  }

  // CLASS END
}
