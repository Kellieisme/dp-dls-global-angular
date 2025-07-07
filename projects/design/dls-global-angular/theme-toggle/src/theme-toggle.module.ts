import { NgModule } from "@angular/core";
import {
  ThemeLocalStorageService,
  THEME_STORAGE_SERVICE,
} from "./theme-storage.service";
import { ThemeToggleComponent } from "./theme-toggle.component";
import { ThemeToggleService } from "./theme-toggle.service";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { IconRegistryModule } from "@design/dls-global-angular/icon-registry";

/**
 * Angular module for mode toggling feature
 * Contains
 *  * ThemeToggleComponent
 *  * ThemeToggleService
 */
@NgModule({
  imports: [MatButtonModule, MatIconModule, IconRegistryModule, ThemeToggleComponent],
  providers: [
    ThemeToggleService,
    {
      provide: THEME_STORAGE_SERVICE,
      useClass: ThemeLocalStorageService,
    },
  ],
  declarations: [],
  exports: [ThemeToggleComponent],
})
export class ThemeToggleModule {}
