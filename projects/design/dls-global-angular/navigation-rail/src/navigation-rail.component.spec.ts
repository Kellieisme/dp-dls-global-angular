import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationRailComponent } from './navigation-rail.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('ButtonComponent', () => {
  let component: NavigationRailComponent;
  let fixture: ComponentFixture<NavigationRailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavigationRailComponent, BrowserAnimationsModule],
      providers: [
        provideRouter([]),
        provideAnimations(),
        provideHttpClient(),
      ]
    });
    fixture = TestBed.createComponent(NavigationRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});