import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-basic-dialog',
    imports: [
        MatDialogModule,
        MatDialogActions,
        MatIconModule,
        MatDialogContent,
        MatButtonModule,
        MatDialogClose,
        MatDialogTitle,
        IconRegistryModule,
    ],
    template: `
     <div class="dialog-header">
      <div>
        <mat-icon svgIcon="icon-warning"></mat-icon>
      </div>
      <div class="dialog-header-actions">
        <button mat-icon-button mat-dialog-close="true">
          <mat-icon svgIcon="icon-close"></mat-icon>
        </button>
      </div>
    </div>

    <h2 mat-dialog-title>Dialog Title</h2>

    <mat-dialog-content>
      <p>
        A dialog is a type of modal window that appears in front of app content
        to provide critical information, or prompt for a decision to be made.
      </p>


<div class="example-button-row">
    <button mat-button>Primary</button>
    <button mat-button>Primary<mat-icon svgIcon="icon-add"></mat-icon></button>
    <button mat-button>Primary<mat-icon svgIcon="icon-add"
            iconPositionEnd></mat-icon></button>
    <button mat-button color="accent">Accent</button>
    <button mat-button color="accent">Accent<mat-icon
            svgIcon="icon-add"></mat-icon></button>
    <button mat-button color="accent">Accent<mat-icon svgIcon="icon-add"
            iconPositionEnd></mat-icon></button>
    <button mat-button color="warn">Warn</button>
    <button mat-button color="warn">Warn<mat-icon
            svgIcon="icon-add"></mat-icon></button>
    <button mat-button color="warn">Warn<mat-icon svgIcon="icon-add"
            iconPositionEnd></mat-icon></button>
    <button mat-button disabled>Disabled</button>
    <button mat-button disabled>Disabled<mat-icon
            svgIcon="icon-add"></mat-icon></button>
    <button mat-button disabled>Disabled<mat-icon svgIcon="icon-add"
            iconPositionEnd></mat-icon></button>
</div>

<h6>Stroked/outlined buttons</h6>
<div class="example-button-row">
    <button mat-stroked-button>Primary</button>
    <button mat-stroked-button color="primary">Primary
        <mat-icon svgIcon="icon-add"></mat-icon>
    </button>
    <button mat-stroked-button color="primary">Primary
        <mat-icon svgIcon="icon-add" iconPositionEnd></mat-icon>
    </button>

    <button mat-stroked-button color="accent">Accent</button>
    <button mat-stroked-button color="accent">Accent
        <mat-icon svgIcon="icon-add"></mat-icon>
    </button>
    <button mat-stroked-button color="accent">Accent<mat-icon svgIcon="icon-add"
            iconPositionEnd></mat-icon></button>

    <button mat-stroked-button color="warn">Warn</button>
    <button mat-stroked-button color="warn">Warn<mat-icon
            svgIcon="icon-add"></mat-icon></button>
    <button mat-stroked-button color="warn">Warn<mat-icon svgIcon="icon-add"
            iconPositionEnd></mat-icon></button>

    <button mat-stroked-button disabled>Disabled</button>
    <button mat-stroked-button disabled><mat-icon
            svgIcon="icon-add"></mat-icon>Disabled</button><button
        mat-stroked-button disabled><mat-icon svgIcon="icon-add"
            iconPositionEnd></mat-icon>Disabled</button>
</div>

<h6>Flat/filled buttons</h6>
<div class="example-button-row">
    <button mat-flat-button>Primary</button>
    <button mat-flat-button color="primary">Primary<mat-icon
            svgIcon="icon-add"></mat-icon></button>
    <button mat-flat-button color="accent">Accent</button>
    <button mat-flat-button color="accent">Accent<mat-icon
            svgIcon="icon-add"></mat-icon></button>
    <button mat-flat-button color="accent">Accent<mat-icon svgIcon="icon-add"
            iconPositionEnd></mat-icon></button>
    <button mat-flat-button color="warn">Warn</button>
    <button mat-flat-button color="warn">Warn<mat-icon
            svgIcon="icon-add"></mat-icon></button>
    <button mat-flat-button color="warn">Warn<mat-icon svgIcon="icon-add"
            iconPositionEnd></mat-icon></button>
    <button mat-flat-button disabled>Disabled</button>
    <button mat-flat-button disabled>Disabled<mat-icon
            svgIcon="icon-add"></mat-icon></button>
    <button mat-flat-button disabled>Disabled<mat-icon svgIcon="icon-add"
            iconPositionEnd></mat-icon></button>
</div>

<h6>Icon Buttons</h6>
<h6 class="text-danger">Hover does not display when "toggle on" class is applied
    in light mode.</h6>

<div class="example-button-row">
    <button mat-icon-button
        aria-label="Example icon-button with a bookmark icon">
        <mat-icon svgIcon="icon-bookmark"></mat-icon>
    </button>

    <button mat-icon-button
        aria-label="Example icon-button with a bookmark icon"
        class="mat-mdc-icon-button--toggle-on">
        <mat-icon svgIcon="icon-bookmark-filled"></mat-icon>
    </button>

    <button mat-icon-button color="accent"
        aria-label="Example icon-button with a favorite icon">
        <mat-icon svgIcon="icon-favorite"></mat-icon>
    </button>

    <button mat-icon-button color="accent"
        aria-label="Example icon-button with a favorite filled icon">
        <mat-icon svgIcon="icon-favorite-filled"></mat-icon>
    </button>

    <button mat-icon-button disabled
        aria-label="Example icon-button with a home icon">
        <mat-icon svgIcon="icon-home"></mat-icon>
    </button>

    <button mat-icon-button disabled
        aria-label="Example icon-button with a home icon">
        <mat-icon svgIcon="icon-home-filled"></mat-icon>
    </button>
</div>
    </mat-dialog-content>

    <mat-dialog-actions>
      <button mat-stroked-button color="primary" mat-dialog-close>Cancel</button>
      <button mat-flat-button color="primary" cdkFocusInitial mat-dialog-close>Accept</button>
    </mat-dialog-actions>
  `,
    styleUrl: './dialog-page.component.scss'
})
export class BasicDialogComponent {}
