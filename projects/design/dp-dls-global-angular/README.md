# Introduction

The Global Angular Component Library provides the following to accelerate development of your Angular project UI, according to the Boeing Atmosphere DLS specifications:

1. A set of global styles and utility classes for typography, with font files and @font-face rules included
2. A customized Bootstrap build that includes the responsive grid and all utility classes
3. A core Angular Material theme that defines the color palette (dark and light), typography config, and density. The theme uses the [Material 2 theme API](https://material.angular.io/guide/material-2-theming).
4. Additional theme customizations for individual Angular Material components
5. Custom icons and and Angular module that loads the icon set as an SvgIconSet for use by the `<mat-icon>` component
6. Custom Angular components

## Angular version compatibility

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.3.

- Items 1 & 2 above can be used with any Angular version.
- Items 3, 4 & 5 above can be used with Angular 15-17
- Item 6 can be used with Angular 17.

> If you choose to use items 3-6 with older versions of Angular, support is not guaranteed.

This README covers two developer roles, contributing and consuming:

- [Using the Global Angular Component Library in your Angular project](#Using-the-Global-Angular-Component-Library-in-your-Angular-project)
- [Contributing to the Global Angular Component Library](#Contributing-to-the-Global-Angular-Component-Library)

# Using the Global Angular Component Library in your Angular project

## Using the NPM package

The Global Angular Component Library is deployed as an NPM package to the Boeing Github package registry. To tell NPM where to download the package, use an `.npmrc` file.

The contents of the `.npmrc` should include:

@jeppesen-foreflight:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=GITLAB_AUTH_TOKEN

Replace the folowing values:
- GITLAB_AUTH_TOKEN: Create a [Github Personal Access Token](https://github.com/settings/tokens) with all permissions. Save in a safe place. Use that string as the GITLAB_AUTH_TOKEN.

### Add dependency to package.json

Run the following command to install the package and save it as a dependency:

```
```
npm install @jeppesen-foreflight/dp-dls-global-angular
```

### Update angular.json

To include the global styles, fonts, icons, and Angular Material theme, add the following files to the build options for your project:

```
"projects": {
    "project-name": {
      "architect": {
        "build": {
          "options": {
            {...},
            "assets": [
              {...},
              { "glob": "svgSet.svg", "input": "./node_modules/@jeppesen-foreflight/dls-global-assets/dist/images/icons/", "output": "./assets" },
              { "glob": "**/*", "input": "./node_modules/@jeppesen-foreflight/dls-global-assets/dist/images/content", "output": "./assets" }
            ],
            "styles": [
              "./node_modules/@jeppesen-foreflight/dp-dls-global-angular/styles/fonts.scss",
              "./node_modules/@jeppesen-foreflight/dp-dls-global-angular/styles/global.scss",
              "./node_modules/@jeppesen-foreflight/dp-dls-global-angular/styles/material.scss",
              "src/styles.scss"
            ],
            {...}
          },
        },
        
      }
    }
  },
```

 If your project's SASS compiler cannot resolve the aliased path to the fonts in the above `fonts.scss` and throws errors, the recommendation is to create your own `fonts.scss` and update the base path to a value your compiler can resolve.

For applications using `@angular-devkit/build-angular:application` create a file with:
```typescript
@import '@jeppesen-foreflight/dls-global-assets/dist/scss/base/fonts';
@include boeing-meso("@jeppesen-foreflight/dls-global-assets/dist/fonts");
```

For applications using `@angular-builders/custom-webpack:browser` create a file with:
```typescript
@import '@jeppesen-foreflight/dls-global-assets/dist/scss/base/fonts';
@include boeing-meso("/fonts");
```

To register the custom SvgIconSet edit the `app.component.ts` and add the `IconRegistryModule` as an import:

```
import { Component } from '@angular/core';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IconRegistryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
```

Important: Add `provideHttpClient()` to the ApplicationConfig in app.config.ts.

```
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient()]
};
```

### Using an Angular Material component

Angular Material components can be used according to the [Angular Material documentation](https://material.angular.dev/components/categories). If the stylesheets are included in the angular.json as described above, the components will be styled without any further action needed.

### Using a custom Angular component

Import the component as needed:

```
import { Component } from '@angular/core';
import { BreadcrumbComponent } from '@jeppesen-foreflight/dp-dls-global-angular/breadcrumb';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

```

# Contributing to the Global Angular Component Library

## Theming an Angular Material component

Many foundational components in the library are Angular Material components that are customized according to the Boeing Atmosphere DLS style specifications. Examples of themed Angular Material components are Button, Menu, and Dialog.

Other components are custom components that may include Angular Material components. Examples of custom components *composed* of Angular Material components are Top App Bar, Navigation Rail, and Breadcrumb. For more information on creating a custom component, see [Creating a custom component](#creating-a-custom-component) below.

The following steps describe the approach for applying the Boeing Atmosphere DLS theme to an Angular Material component.

### 1. Apply the global DLS theme

The first step in customizing an Angular Material component is initializing its theme using the Angular Material theming API.

1. In `projects/design/dp-dls-global-angular/styles/material/components` create a new SCSS file for the component. The simplest approach is to copy one of the existing files and rename it. For example, if you are customizing the Angular Material Menu component, copy or create the file and name it `_menu.scss`
2. In `projects/design/dp-dls-global-angular/styles/material.scss` add the new `_menu.scss` to the list of imports.
3. Import the required SCSS modules:

```
@use '@angular/material' as mat;
@use '@jeppesen-foreflight/dls-global-assets/dist/scss/base/_variables.scss' as vars;
@use '@jeppesen-foreflight/dls-global-assets/dist/scss/base/_compositionMixins.scss' as composition;
@use '../m3-theme.scss' as m3;
@use '@jeppesen-foreflight/dls-global-assets/dist/scss/base/_variables.scss' as vars;
@use '@jeppesen-foreflight/dls-global-assets/dist/scss/base/_compositionMixins.scss' as composition;
@use '../m3-theme.scss' as m3;
```

All design tokens used in the style customizations should be referenced from `_variables.scss`, `_compositionMixins.scss`, `_typographyMixins.scss`, or `_bootstrapMixins.scss`. Do not hard code CSS properties. This ensures that when tokens change in Tokens Studio, the values will be reflected downstream without the need for code updates.

4. Apply the dark theme as the default theme. 

```
@include mat.menu-theme($dark-theme);
```

Using the `{component-name}-theme` mixin name includes the component's styles for all theme dimensions (base, color, typography, and density).

5. Apply the light theme when the `theme-light` parent class is present.

```
.theme-light {
  @include mat.menu-color($light-theme);
}
```

### 2. Customize using CSS custom properties

The Angular Material style mixins emit a set of CSS custom properties for each components. Any customizations that can be made by manually setting these custom properties should be done *first*, before adding additional styles targetting CSS classes.

See the Angular Material documentation on [Granular customizations with CSS custom properties](https://material.angular.io/guide/theming#granular-customizations-with-css-custom-properties)

The simpest way to get a comprehensive list of the CSS custom properties available for your component is to reference the CSS output of one of the prebuilt Angular Material themes. 
1. Reference the file `node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css`. In your editor, select the contents of the file and format it for easy reading. 
2. Search for your component name (e.g. `-menu`) and copy over the matched set of CSS custom properties into the `_menu.scss` file.
3. Only modify the CSS custom properties you need (where the design differs from default Angular Material styles). Comment out the other ones.

The example syntax for assigning a SCSS variable to an Angular Material CSS custom property is:

```
--mat-menu-container-shape: #{$size-relaxed-radius-m};
```

The example syntax for assigning a themed CSS custom property to an Angular Material CSS custom property is:

```
--mat-menu-container-shape: --var(size-radius-m);
```

### 3. Add additional styles if needed 

For the final set of customizations, write additional CSS rules using Angular Material element classes as selectors. If you need to overwrite default Angular Material styles, use selector specificity. Avoid using the `!important` flag unless absolutely critical and the style cannot be applied using selector specificity.

For example, to add style to the element with class `.mat-mdc-menu-item`: 

```
.mat-mdc-menu-item {
    min-height: $size-condensed-sizing-3xl;
}
```

To overwrite style of the element with class `.mat-mdc-menu-item`:

```
[mat-menu-item] {
  &.mat-mdc-menu-item {
    min-height: $size-condensed-sizing-3xl;
  }
}
```

Note the use of the element name in the selector to increase specificity so the style gets overwritten.

## Creating a custom component

From the root of the repository, run the following command to scaffold a new component:

```
ng generate component component-name --project @jeppesen-foreflight/dp-dls-global-angular --path projects/design/dp-dls-global-angular
```

You can also use:
```
ng generate directive|pipe|service|class|guard|interface|enum|module --project @jeppesen-foreflight/dp-dls-global-angular --path projects/design/dp-dls-global-angular
```

Follow the pattern of an existing custom component (such as `breadcrumb`) to do the following steps:
1. Create a `src` folder inside the component folder.
2. Move the generated component files into the `src` folder.
3. Create or copy the `index.ts`, `ng-package.json`, and `public-api.ts` files and update the paths inside to match the new component name.

The above structure enables components to be packaged with each component having its own entry point. The consuming application can import individual components as needed using the syntax `import { ComponentName } from '@jeppesen-foreflight/dp-dls-global-angular/component-name';`.

## Using the demo application for development

The repository includes a demo application with live-reloading that will run with the command `npm run start`. 

For each component, create a new page component and route to provide a development sandbox for that component.

### Creating a page component

From the root of the repository, run the following command to scaffold a new page component:

```
ng generate component component-name --project demo --path projects/demo/src/app
```

Add a new route to the `app.routes.ts`:

```
export const routes: Routes = [
  {...},  
  {
    path: 'component-name',
    component: ComponentName
  }
];
```

`http://localhost:4200/my-component` will now provide an app sandbox to develop and test the component.

To access your new component route from the main menu, edit `src/app/home/home.component.html` to include a route link to your new component.


## Adding Storybook stories

All components (customized Angular Material components and custom components) should have at least one Storybook story to demo their functionality and provide a QA testing space.

It is at the developer's discrection how many stories to create, but there should be enough to demonstrate the major variations of the components and serve as the best source of developer documentation for the component.

Use existing Storybook stories as a template for creating a new set of Storybook stories.

Customized Angular Material component:
```
projects/design/dp-dls-global-angular/stories/button.stories.ts
```

Custom component:
```
projects/design/dp-dls-global-angular/stories/breadcrumb.stories.ts
```

## Running unit tests

Run `ng test dp-dls-global-angular` to execute the unit tests via [Karma](https://karma-runner.github.io).
