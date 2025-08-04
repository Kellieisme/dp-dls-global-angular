import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '@design/dls-global-angular/breadcrumb';

// Mock for ActivatedRoute
const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: () => 'test-id'
    }
  }
};

export default {
  title: 'COMPONENTS/Breadcrumb',
  component: BreadcrumbComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        RouterLink,
        BreadcrumbComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }),
  ],
} as Meta;

type BreadcrumbsStory = StoryObj<BreadcrumbComponent>;

export const Default: BreadcrumbsStory = {
  name: 'Three Levels',
  args: {
    breadcrumbs: [
      { label: 'Home', path: './' },
      { label: 'Level 1', path: './level-1' },
      { label: 'Level 2', path: './level-1/level-2' },
      { label: 'Level 3', path: './level-3/level-3' },
    ],
  },
};

export const FiveLevels: BreadcrumbsStory = {
  name: 'Five Levels',
  args: {
    breadcrumbs: [
      { label: 'Home', path: './' },
      { label: 'Level 1', path: './level-1' },
      { label: 'Level 2', path: './level-1/level-2' },
      { label: 'Level 3', path: './level-1/level-2/level-3' },
      { label: 'Level 4', path: './level-1/level-2/level-3/level-4' },
      { label: 'Level 5', path: './level-1/level-2/level-3/level-4/level-5' },
    ],
  },
};

