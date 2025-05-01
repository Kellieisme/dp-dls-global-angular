import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDrawerPageComponent } from './navigation-drawer-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

describe('NavigationDrawerPageComponent', () => {
  let component: NavigationDrawerPageComponent;
  let fixture: ComponentFixture<NavigationDrawerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationDrawerPageComponent, BrowserAnimationsModule],
      providers: [
        provideRouter([])
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavigationDrawerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
