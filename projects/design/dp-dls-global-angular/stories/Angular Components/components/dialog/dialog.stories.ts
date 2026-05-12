import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, inject, TemplateRef, ViewChild } from '@angular/core';
import { IconRegistryStorybookModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';

@Component({
    selector: 'storybook-dialog-page',
    template: `
    <div>
      <button matButton="outlined" color="primary" (click)="openBasicDialog()">
        Open Dialog
      </button>
    </div>
    
    <ng-template #basicDialog let-data="data">
    
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 0; z-index: 1;">
        <div style="position: absolute; top: calc(var(--foundation-spacing-m) + 16px); left: var(--foundation-spacing-xl);">
          @if (args.withIcon) {
            <mat-icon svgIcon="icon-warning"></mat-icon>
          }
        </div>

        <div style="position: absolute; top: calc(var(--foundation-spacing-2xs) + 2px); right: var(--foundation-spacing-2xs);">
          @if (args.closeButton) {
            <button matIconButton mat-dialog-close="true">
              <mat-icon svgIcon="icon-close"></mat-icon>
            </button>
          }
        </div>
      </div>
    
    
      <h2 mat-dialog-title style="padding-top: calc(var(--base-dimension-dynamic-s12) - 4px); padding-left: var(--foundation-spacing-l); margin-top: var(--foundation-spacing-none);">Dialog Title</h2>
      <mat-dialog-content>

      <button matButton="filled" color="accent">Filled button</button>
        <p>
          A dialog is a type of modal window that appears in front of app
          content to provide critical information, or prompt for a decision to
          be made.
        </p>
        <h3 class="title-medium">Speed &amp; Performance</h3>
        <p>
          Achieve the maximum speed possible on the Web Platform today, and take
          it further, via Web Workers and server-side rendering. Angular puts
          you in control over scalability. Meet huge data requirements by
          building data models on RxJS, Immutable.js or another push-model.
        </p>
    
        <h3 class="title-medium">Incredible tooling</h3>
        <p>
          Build features quickly with simple, declarative templates. Extend the
          template language with your own components and use a wide array of
          existing components.
        </p>
    
        <p>
          Get immediate Angular-specific help and feedback with nearly every IDE
          and editor. All this comes together so you can focus on building
          amazing apps rather than trying to make the code work.
        </p>
    
        <p>
          From prototype through global deployment, Angular delivers the
          productivity and scalable infrastructure that supports Google's
          largest applications.
        </p>
      </mat-dialog-content>
    
      <mat-dialog-actions style="display: flex; gap: var(--foundation-spacing-xs);">
        @if (args.tertiaryButton) {
          <button
            [closeButton]="closeButton"
            style="margin-inline-end: auto;"
            matButton
            color="primary"
            mat-dialog-close="true"
            >
            Tertiary
          </button>
        }
        <button matButton="outlined" mat-dialog-close>Cancel</button>
        <button
          matButton="filled"
          color="primary"
          mat-dialog-close
          cdkFocusInitial
          >
          Install
        </button>
      </mat-dialog-actions>
    
    </ng-template>
    `,
    standalone: false
})
class DialogPageComponent {
  @Input() args: any;
  @ViewChild('basicDialog') basicDialog!: TemplateRef<any>;
  private dialog = inject(MatDialog);

  openBasicDialog() {
    this.dialog.open(this.basicDialog, {
      width: 'var(--dialog-width, 400px)',
      data: this.args,
    });
  }
}

export default {
  title: 'COMPONENTS/Dialog',
  decorators: [
    moduleMetadata({
      declarations: [DialogPageComponent],
      imports: [
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        HttpClientModule,
        IconRegistryStorybookModule,
      ],
    }),
  ],
  argTypes: {
    withIcon: { control: 'boolean', defaultValue: false, },
    closeButton: { control: 'boolean', defaultValue: false, },
    tertiaryButton: { control: 'boolean', defaultValue: false, },
  },
} as Meta;

const Template: StoryObj = {
  render: (args) => ({
    props: {
      args,
    },
    template: `
      <storybook-dialog-page [args]="args"></storybook-dialog-page>
    `,
  }),
};

export const Standard: StoryObj = {
  ...Template,
  args: {
    withIcon: true,
    closeButton: false,
    tertiaryButton: false,
  },
};
