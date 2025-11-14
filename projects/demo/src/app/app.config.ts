import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { routes } from './app.routes';
import { ThemeToggleService } from '../../../design/dp-dls-global-angular/theme-toggle/src/theme-toggle.service';
import { ThemeLocalStorageService, THEME_STORAGE_SERVICE } from '../../../design/dp-dls-global-angular/theme-toggle/src/theme-storage.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAnimations(),
    ThemeToggleService,
    {
      provide: THEME_STORAGE_SERVICE,
      useClass: ThemeLocalStorageService,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {floatLabel: 'auto'}
    }
  ]
};
