import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { AtmosphereSidesheetVariant, AtmosphereSidesheetContentMode, AtmosphereSidesheetButtonsArray} from './sidesheet.types';

export enum SidesheetVariant {
  STANDARD = 'standard',
  MODAL = 'modal',
}

export enum SidesheetPosition {
  START = 'start',
  END = 'end',
}

export enum SidesheetContentMode {
  SIDE = 'side',
  OVER = 'over',
  PUSH = 'push',
}

/**
 * A sidesheet that can fly out from the left-hand side and present additional
 * options or context.
 */
@Component({
  selector: 'ba-sidesheet',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    IconRegistryModule
],
  templateUrl: './sidesheet.component.html',
  styleUrls: ['./sidesheet.component.scss'],
})
export class SideSheetComponent {

  /**
   * Array of buttons to render in the sidesheet.
   */
  @Input() buttons: AtmosphereSidesheetButtonsArray = [];

  /**
   * A flag denoting whether the sidesheet is opened or closed. Defaults to
   * A flag denoting whether the sidesheet is opened or closed. Defaults to
   * `false` (closed).
   */
  @Input() opened: boolean = false;

  /**
   * A flag denoting whether or not to render the sidesheet's footer. Defaults
   * to `true` (shown).
   */
  @Input() showFooter: boolean = true;

  /**
   * A means of configuring the sidesheet's width. Default value is 320px.
   */
  @Input() sidesheetWidth: string = '320px';

  /**
   * Setting the sidesheet's position.
   */
  @Input() sidesheetPosition: 'start' | 'end' = SidesheetPosition.START;

  /**
   * The title to render in the sidesheet.
   */
  @Input() title: string = '';

  /**
   * Which sidesheet variant to render. Options are `standard` and `modal`.
   */
  @Input() variant: AtmosphereSidesheetVariant = SidesheetVariant.STANDARD;

  /**
   * How the sidesheet will interact with page content.
   */
  get sidesheetMode(): AtmosphereSidesheetContentMode {
    return this.variant === SidesheetVariant.STANDARD ? SidesheetContentMode.SIDE : SidesheetContentMode.OVER;
  }
}
