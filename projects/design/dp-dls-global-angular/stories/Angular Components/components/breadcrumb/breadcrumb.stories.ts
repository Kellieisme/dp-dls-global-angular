import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '@jeppesen-foreflight/dp-dls-global-angular/breadcrumb';

// Mock for ActivatedRoute
const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: () => 'test-id'
    }
  }
};

const generateBreadcrumbs = (levels: number) => {
  const breadcrumbs = [{ label: 'Home', path: './' }];
  let path = '.';
  
  for (let i = 1; i < levels; i++) {
    path += `/level-${i}`;
    breadcrumbs.push({ 
      label: `Level ${i}`, 
      path: path 
    });
  }
  
  return breadcrumbs;
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
  argTypes: {
    breadcrumbs: {
      description: 'Breadcrumb items',
      control: false,
    },
    levels: {
      description: 'Number of breadcrumb levels',
      control: { type: 'number', min: 2, max: 10, step: 1 },
      table: {
        category: 'Story Controls',
      },
    },
  },
} as Meta;

type BreadcrumbsStory = StoryObj<BreadcrumbComponent & { levels: number }>;

export const Breadcrumb: BreadcrumbsStory = {
  args: {
    levels: 3,
  },
  render: (args) => ({
    props: {
      breadcrumbs: generateBreadcrumbs(args.levels),
    },
    template: `<ba-breadcrumb [breadcrumbs]="breadcrumbs"></ba-breadcrumb>`,
  }),
  name: 'Breadcrumb',
};

