import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ThemeToggleService } from '../../../design/dls-global-angular/theme-toggle/src/theme-toggle.service';
import { ThemeLocalStorageService, THEME_STORAGE_SERVICE } from '../../../design/dls-global-angular/theme-toggle/src/theme-storage.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(withFetch()), 
    provideAnimations(),
    ThemeToggleService,
    {
      provide: THEME_STORAGE_SERVICE,
      useClass: ThemeLocalStorageService,
    }
  ]
};
