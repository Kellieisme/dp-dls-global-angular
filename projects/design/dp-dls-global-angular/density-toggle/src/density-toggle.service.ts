import { Inject, Injectable, PLATFORM_ID, DOCUMENT } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { DensityStorage, DENSITY_STORAGE_SERVICE } from "./density-storage.service";
import { Density } from "./density-toggle.model";
import { isPlatformBrowser } from '@angular/common';

/**
 * Angular service that provides the density toggle feature.
 * This service adds the `class='theme-relaxed'` or `class='theme-condensed'` to the document.body element
 * and spacing changes based on the class added to the document.body
 *
 * Also provides an Observable that emits the current density every time it changes
 */
@Injectable()
export class DensityToggleService {
  /**
   * contains the current active density
   * avoid mutating it directly, instead use `updateCurrentDensity`
   */
  private currentDensity: Density = Density.RELAXED;

  /**
   * BehaviorSubject that detects the density changes
   */
  private densityChangedSubject = new BehaviorSubject(this.currentDensity);

  /**
   * Observable that emits the current density when it changes.
   * Exposed publicly so that other components can use this feature
   */
  densityChanged$: Observable<Density>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(DENSITY_STORAGE_SERVICE) private densityStorage: DensityStorage,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.densityChanged$ = this.densityChangedSubject.asObservable();
    this.init(platformId);
  }

  /**
   * Function to mutate the currentDensity
   * @param density Density
   */
  private updateCurrentDensity(density: Density, skipSave?: boolean) {
    this.currentDensity = density;
    this.densityChangedSubject.next(this.currentDensity);
    if (!skipSave) {
      this.densityStorage.save(this.currentDensity);
    }
  }

  /**
   * Init function that updates the application based on the initial density value
   * Flow as below:
   * 1 - If there is a saved density in the browser - use this as the initial value
   * 2 - Else set the default value to `relaxed`
   */
  private init(platformId: object) {
    let initDensity = Density.RELAXED;
    if (isPlatformBrowser(platformId)) {
      const savedDensity = this.densityStorage.get();
      if (savedDensity) {
        initDensity = savedDensity;
      }
    }
    this.document.body.classList.remove(Density.RELAXED, Density.CONDENSED);
    this.document.body.classList.add(initDensity);
    if (isPlatformBrowser(platformId)) {
      this.updateCurrentDensity(initDensity);
    }
    else {
      this.updateCurrentDensity(initDensity, true);
    }
  }

  /**
   * Function that toggles the density
   */
  toggleDensity() {
    const newDensity =
      this.currentDensity === Density.RELAXED ? Density.CONDENSED : Density.RELAXED;
    this.document.body.classList.remove(this.currentDensity);
    this.updateCurrentDensity(newDensity);
    this.document.body.classList.add(this.currentDensity);
  }

  /**
   * Function to get the current density
   * @returns Density
   */
  getCurrentDensity() {
    return this.currentDensity;
  }

  /**
   * Function to set the density
   * @param density Density
   */
  setDensity(density: Density) {
    this.document.body.classList.remove(this.currentDensity);
    this.updateCurrentDensity(density);
    this.document.body.classList.add(this.currentDensity);
  }
}
