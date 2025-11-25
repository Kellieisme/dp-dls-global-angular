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
     <div style="display: flex;">
      <div style="padding: var(--size-spacing-l) 0 0 var(--size-spacing-l); margin-bottom: 0;">
        <mat-icon svgIcon="icon-warning"></mat-icon>
      </div>
      <div style="padding: var(--size-spacing-2xs) var(--size-spacing-2xs) 0 0; margin-bottom: 0; margin-left: auto;">
        <button matIconButton mat-dialog-close="true">
          <mat-icon svgIcon="icon-close"></mat-icon>
        </button>
      </div>
    </div>

    <h2 mat-dialog-title style="padding-top: var(--size-spacing-none); margin-top: var(--size-spacing-none);">Dialog Title</h2>

    <mat-dialog-content>
      <p>
        A dialog is a type of modal window that appears in front of app content
        to provide critical information, or prompt for a decision to be made.
      </p>


<div class="example-button-row">
        <button matButton>Primary</button>

        <button matButton>Primary
                <mat-icon svgIcon="icon-add"></mat-icon>
        </button>

        <button matButton>Primary<mat-icon svgIcon="icon-add" iconPositionEnd></mat-icon></button>
        <button matButton color="accent">Accent</button>
        <button matButton color="accent">Accent<mat-icon svgIcon="icon-add"></mat-icon></button>
        <button matButton color="accent">Accent<mat-icon svgIcon="icon-add" iconPositionEnd></mat-icon></button>
        <button matButton color="warn">Warn</button>
        <button matButton color="warn">Warn<mat-icon svgIcon="icon-add"></mat-icon></button>
        <button matButton color="warn">Warn<mat-icon svgIcon="icon-add" iconPositionEnd></mat-icon></button>
        <button matButton disabled>Disabled</button>
        <button matButton disabled>Disabled<mat-icon svgIcon="icon-add"></mat-icon></button>
        <button matButton disabled>Disabled<mat-icon svgIcon="icon-add" iconPositionEnd></mat-icon></button>
</div>

<h6>Stroked/outlined buttons</h6>
<div class="example-button-row">
        <button matButton="outlined">Primary</button>
        <button matButton="outlined" color="primary">Primary
                <mat-icon svgIcon="icon-add"></mat-icon>
        </button>
        <button matButton="outlined" color="primary">Primary
                <mat-icon svgIcon="icon-add" iconPositionEnd></mat-icon>
        </button>

        <button matButton="outlined" color="accent">Accent</button>
        <button matButton="outlined" color="accent">Accent
                <mat-icon svgIcon="icon-add"></mat-icon>
        </button>
        <button matButton="outlined" color="accent">Accent<mat-icon svgIcon="icon-add"
                        iconPositionEnd></mat-icon></button>

        <button matButton="outlined" color="warn">Warn</button>
        <button matButton="outlined" color="warn">Warn<mat-icon svgIcon="icon-add"></mat-icon></button>
        <button matButton="outlined" color="warn">Warn<mat-icon svgIcon="icon-add" iconPositionEnd></mat-icon></button>

        <button matButton="outlined" disabled>Disabled</button>

        <button matButton="outlined" disabled>
                <mat-icon svgIcon="icon-add"></mat-icon>Disabled
        </button>

        <button matButton="outlined" disabled>
                <mat-icon svgIcon="icon-add" iconPositionEnd></mat-icon>Disabled</button>
</div>

<h6>Flat/filled buttons</h6>
<div class="example-button-row">
        <button matButton="filled">default</button>
        <button matButton="filled" color="primary">Primary<mat-icon svgIcon="icon-add"></mat-icon></button>
        <button matButton="filled" color="accent">Accent</button>
        <button matButton="filled" color="accent">Accent<mat-icon svgIcon="icon-add"></mat-icon></button>
        <button matButton="filled" color="accent">Accent<mat-icon svgIcon="icon-add"iconPositionEnd></mat-icon></button>
        <button matButton="filled" color="warn">Warn</button>
        <button matButton="filled" color="warn">Warn<mat-icon svgIcon="icon-add"></mat-icon></button>
        <button matButton="filled" color="warn">Warn<mat-icon svgIcon="icon-add" iconPositionEnd></mat-icon></button>
        <button matButton="filled" disabled>Disabled</button>
        <button matButton="filled" disabled>Disabled<mat-icon svgIcon="icon-add"></mat-icon></button>
        <button matButton="filled" disabled>Disabled<mat-icon svgIcon="icon-add" iconPositionEnd></mat-icon></button>
</div>

<h6>Icon Buttons</h6>
<p>Hover does not display when "toggle on" class is applied in light mode.</p>

<div class="example-button-row">

        <button matIconButton aria-label="Example icon button with a vertical three dot icon">
                <mat-icon svgIcon="icon-more-vert"></mat-icon>
        </button>

        <button matIconButton color="primary" aria-label="Example icon-button with a bookmark icon">
                <mat-icon svgIcon="icon-more-vert"></mat-icon>
        </button>

        <button matIconButton color="accent" aria-label="Example icon-button with a favorite filled icon">
                <mat-icon svgIcon="icon-favorite-filled"></mat-icon>
        </button>

             <button matIconButton color="warn" aria-label="Example icon-button with a favorite filled icon">
                <mat-icon svgIcon="icon-favorite-filled"></mat-icon>
        </button>

        <button matIconButton disabled aria-label="Example icon-button with a home icon">
                <mat-icon svgIcon="icon-home-filled"></mat-icon>
        </button>

        <p>Toggled (?)</p>

        <button matIconButton aria-label="Example icon button with a vertical three dot icon"
                class="mat-mdc-icon-button--toggle-on">
                <mat-icon svgIcon="icon-more-vert"></mat-icon>
        </button>
</div>


    <mat-dialog-actions style="display: flex; gap: var(--size-spacing-xs);">
      <button matButton="outlined" color="primary" mat-dialog-close>Cancel</button>
      <button matButton="filled" color="primary" cdkFocusInitial mat-dialog-close>Accept</button>
    </mat-dialog-actions>
  `,
    styleUrl: './dialog-page.component.scss'
})
export class BasicDialogComponent {}
