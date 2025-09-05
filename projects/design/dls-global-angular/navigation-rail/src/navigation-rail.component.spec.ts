import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationRailComponent } from './navigation-rail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

describe('ButtonComponent', () => {
  let component: NavigationRailComponent;
  let fixture: ComponentFixture<NavigationRailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavigationRailComponent, BrowserAnimationsModule],
      providers: [
        provideRouter([])
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