import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationRailPageComponent } from './navigation-rail-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

describe('NavigationRailPageComponent', () => {
  let component: NavigationRailPageComponent;
  let fixture: ComponentFixture<NavigationRailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationRailPageComponent, BrowserAnimationsModule],
      providers: [
        provideRouter([])
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavigationRailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
