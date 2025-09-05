import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ThemeStorage, THEME_STORAGE_SERVICE } from "./theme-storage.service";
import { Theme } from "./theme-toggle.model";
import { isPlatformBrowser } from '@angular/common';

/**
 * Angular service that provides the theme toggle feature.
 * In summary this service adds the `class='theme-light'` to the document.body element and
 * styles change based on the class added to the document.body
 *
 * Also provides a Observable that emits the current theme every time theme changes
 */
@Injectable()
export class ThemeToggleService {
  /**
   * contains the current active theme
   * avoid mutating it directly, instead use `updateCurrentTheme`
   */
  private currentTheme: Theme = Theme.DARK;

  /**
   * BehaviorSubject that detects the theme changes
   */
  private themeChangedSubject = new BehaviorSubject(this.currentTheme);

  /**
   * Observable that emits the current theme when theme changes.
   * Exposed publicly so that other components can use this feature
   */
  themeChanged$: Observable<Theme>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(THEME_STORAGE_SERVICE) private themeStorage: ThemeStorage,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.themeChanged$ = this.themeChangedSubject.asObservable();
    this.init(platformId);
  }

  /**
   * Function to mutate the currentTheme
   * @param theme Theme
   */
  private updateCurrentTheme(theme: Theme, skipSave?: boolean) {
    this.currentTheme = theme;
    this.themeChangedSubject.next(this.currentTheme);
    if (!skipSave) {
      this.themeStorage.save(this.currentTheme);
    }
  }

  /**
   * Init function that update the application based on the initial theme value
   * Flow as below
   * 1 - If there is a saved theme in the browser - use this as the initial value
   * 2 - If there is no saved theme, Check for the preferred device theme
   * 3 - If device theme is dark, set the init value to `dark` 
   * 4 - Else set the default value to `light`
   */
  private init(platformId: object) {
    let initTheme = Theme.DARK;
    if (isPlatformBrowser(platformId)) {
      initTheme = this.themeStorage.get();
      if (!initTheme) {
        const deviceMode = window.matchMedia("(prefers-color-scheme: light)");
        initTheme = deviceMode.matches ? Theme.LIGHT : Theme.DARK;
      }
      this.updateCurrentTheme(initTheme);
    }
    else {
      this.updateCurrentTheme(initTheme, true);
    }
    this.document.body.classList.toggle(Theme.LIGHT);
    this.document.body.classList.toggle(Theme.DARK);
    this.document.body.classList.add(this.currentTheme);
  }

  /**
   * Function that toggles the theme
   * Exposed publicly
   */
  toggleTheme() {
    this.document.body.classList.toggle(Theme.LIGHT);
    this.document.body.classList.toggle(Theme.DARK);
    if (this.currentTheme === Theme.LIGHT) {
      this.updateCurrentTheme(Theme.DARK);
    } else {
      this.updateCurrentTheme(Theme.LIGHT);
    }
  }
}
