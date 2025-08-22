import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { IconRegistryModule } from '@dasdigitalplatform/dls-global-angular/icon-registry';

@Component({
    selector: 'app-scrollable-dialog',
    imports: [
        MatDialogModule,
        MatButtonModule,
        IconRegistryModule,
    ],
    template: `
    <h2 mat-dialog-title>Update Angular</h2>
    <mat-dialog-content> 
      <h3 class="title-medium">Speed &amp; Performance</h3>
      <p>
        Achieve the maximum speed possible on the Web Platform today, and take
        it further, via Web Workers and server-side rendering. Angular puts you
        in control over scalability. Meet huge data requirements by building
        data models on RxJS, Immutable.js or another push-model.
      </p>

      <h3 class="title-medium">
        Incredible tooling
      </h3>
      <p>
        Build features quickly with simple, declarative templates. Extend the
        template language with your own components and use a wide array of
        existing components.
      </p>

      <p>
        Get immediate Angular-specific help and feedback with nearly every IDE
        and editor. All this comes together so you can focus on building amazing
        apps rather than trying to make the code work.
      </p>

      <p>
        From prototype through global deployment, Angular delivers the
        productivity and scalable infrastructure that supports Google's largest
        applications.
      </p>

      <p>
        Angular is a platform that makes it easy to build applications with the
        web. Angular combines declarative templates, dependency injection, end
        to end tooling, and integrated best practices to solve development
        challenges. Angular empowers developers to build applications that live
        on the web, mobile, or the desktop
      </p>
    </mat-dialog-content>

    <mat-dialog-actions class="d-flex">
      <button class="me-auto" mat-button color="primary" mat-dialog-close="true">Tertiary</button>
      <button mat-stroked-button mat-dialog-close>Cancel</button>
      <button mat-flat-button color="primary" mat-dialog-close cdkFocusInitial>Install</button>
    </mat-dialog-actions>
  `,
    styleUrl: './dialog-page.component.scss'
})
export class ScrollableDialogComponent {}
