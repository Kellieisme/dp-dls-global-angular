import { NgModule } from '@angular/core';
import { DensityToggleComponent } from './density-toggle.component';
import { DensityToggleService } from './density-toggle.service';
import { DENSITY_STORAGE_SERVICE, LocalStorageDensityStorage } from './density-storage.service';

@NgModule({
  imports: [DensityToggleComponent],
  exports: [DensityToggleComponent],
  providers: [
    DensityToggleService,
    { provide: DENSITY_STORAGE_SERVICE, useClass: LocalStorageDensityStorage }
  ]
})
export class DensityToggleModule { }
