import { Component, Input, ViewEncapsulation,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { AtmosphereBreadcrumbLinkArray } from './breadcrumb.types';

/**
 * The Atmosphere breadcrumb component provides for an actionable/navigable 
 * path history when viewing deeply nested pages.
 * 
 * If a breadcrumb trail has more than 4 steps, then all steps other than the 
 * first and the last two will be pulled into a menu so that overall footprint
 * of the breadcrumb trail can be maintained as consistent.
 */
@Component({
  selector: 'ba-breadcrumb',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class BreadcrumbComponent {
  /**
   * An array of the various pages in the navigation history. Each member of the
   * array should be an object containing both `label` (the page name as 
   * displayed on-screen) and `path` (the path to the page in question, for 
   * navigational purposes.)
   * 
   * Example:
   * ```
   * {label: 'Home', path: './'}
   * ```
   */
   @Input() breadcrumbs: AtmosphereBreadcrumbLinkArray = [];

   @Output() selectedLink = new EventEmitter<{ label: string, path: string} >();

   /**
   * Handles breadcrumb selection, emitting event and updating the breadcrumbs.
   */
   selectBreadcrumb(index: number): void {
    const selected = this.breadcrumbs[index];
    this.selectedLink.emit({ label: selected.label, path: selected.path});

    // Update breadcrumbs to reflect selection (truncate to selected level)
    this.breadcrumbs = this.breadcrumbs.slice(0, index + 1);
  }

}
