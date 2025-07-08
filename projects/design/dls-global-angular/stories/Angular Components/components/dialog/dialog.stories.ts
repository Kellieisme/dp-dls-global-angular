import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, inject, TemplateRef, ViewChild } from '@angular/core';
import { IconRegistryStorybookModule } from '@design/dls-global-angular/icon-registry';

@Component({
    selector: 'storybook-dialog-page',
    template: `
    selector: 'storybook-dialog-page',
    template: `
    <div>
      <button mat-stroked-button color="primary" (click)="openBasicDialog()">
        Open Dialog
      </button>
    </div>

    <ng-template #basicDialog let-data="data">

      <div class="d-flex">

        @if (args.withIcon) {
          <div style="padding: 24px 0 0 24px;margin-bottom: 0;">
            <mat-icon svgIcon="icon-warning"></mat-icon>
          </div>
        }

        @if (args.closeButton) {
          <div class="ms-auto" style="padding: 4px 4px 0 0; margin-bottom: 0;">
            <button mat-icon-button mat-dialog-close="true">
              <mat-icon svgIcon="icon-close"></mat-icon>
            </button>
          </div>
        }

      </div>


      <!-- 6px 24px 13px -->
      <h2 mat-dialog-title style="padding-top: 0px; margin-top: 0px;">Dialog Title</h2>
      <mat-dialog-content>
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

      <mat-dialog-actions class="d-flex">
        @if (args.tertiaryButton) {
          <button
            [closeButton]="closeButton"
            class="me-auto"
            mat-button
            color="primary"
            mat-dialog-close="true"
            >
            Tertiary
          </button>
        }
        <button mat-stroked-button mat-dialog-close>Cancel</button>
        <button
          mat-flat-button
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
      width: '400px',
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
