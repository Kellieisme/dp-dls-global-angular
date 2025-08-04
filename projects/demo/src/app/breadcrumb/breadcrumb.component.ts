import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../design/dls-global-angular/breadcrumb/src/breadcrumb.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'breadcrumb-page',
    imports: [MatButtonModule, BreadcrumbComponent],
    templateUrl: './breadcrumb.component.html',
    styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbPageComponent {
  title = 'Breadcrumb';

  breadcrumbData: number = 1; // Start from Home (index 1 for `slice`)
  crumbs = [
    { label: 'Home', path: '/breadcrumb' },
    { label: 'Level 1', path: '/breadcrumb/level-1' },
    { label: 'Level 2', path: '/breadcrumb/level-1/level-2' },
    { label: 'Level 3', path: '/breadcrumb/level-1/level-2/level-3' },
    { label: 'Level 4', path: '/breadcrumb/level-1/level-2/level-3/level-4' },
    { label: 'Level 5', path: '/breadcrumb/level-1/level-2/level-3/level-4/level-5' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.url.subscribe(urlSegments => {
      const currentPath = '/' + urlSegments.map(seg => seg.path).join('/');
      this.breadcrumbData = this.getBreadcrumbIndex(currentPath);
    });
  }

  getBreadcrumbIndex(currentPath: string): number {
    const index = this.crumbs.findIndex(crumb => crumb.path === currentPath);
    return index >= 0 ? index + 1 : 1; // Ensure at least Home is shown
  }

  onBreadcrumbSelected(event: { label: string; path: string;}) {
    console.log('Breadcrumb selected:', event);
    // Example: Send analytics event
    // analyticsService.track('Breadcrumb Clicked', event);
   }

  goToNextLevel() {
    console.log('Go to next level');
    if (this.breadcrumbData < this.crumbs.length) {
      const nextPath = this.crumbs[this.breadcrumbData].path;
      console.log('Navigating to:', nextPath);
      this.router.navigate([nextPath]).then(() => {
        this.breadcrumbData++; // Update breadcrumb index after successful navigation
      });
    }
  }
}
