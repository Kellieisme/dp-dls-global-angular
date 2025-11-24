import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [CommonModule],
})

export class IconRegistryModule {
  constructor(matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    console.log('IconRegistryModule: Registering SVG icon set from ./assets/svgSet.svg');
    matIconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('./assets/svgSet.svg')
    );
  }
 }

 @NgModule({
  declarations: [],
  imports: [CommonModule],
})

 export class IconRegistryStorybookModule {
  constructor(matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('./storybookassets/svgSet.svg')
    );
  }
 }
