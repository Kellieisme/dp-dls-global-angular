import { InjectionToken } from "@angular/core";
import { Density } from "./density-toggle.model";

export const DENSITY_STORAGE_SERVICE = new InjectionToken<DensityStorage>(
  "DENSITY_STORAGE_SERVICE"
);

export interface DensityStorage {
  get(): Density | null;
  save(density: Density): void;
}

export class LocalStorageDensityStorage implements DensityStorage {
  private static readonly storageKey = "user-density";

  get(): Density | null {
    try {
      return (window.localStorage[LocalStorageDensityStorage.storageKey] ||
        null) as Density | null;
    } catch {
      return null;
    }
  }

  save(density: Density): void {
    try {
      window.localStorage[LocalStorageDensityStorage.storageKey] = density;
    } catch {
      // no action
    }
  }
}
