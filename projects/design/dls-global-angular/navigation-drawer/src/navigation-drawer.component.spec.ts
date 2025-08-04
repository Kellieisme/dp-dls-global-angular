import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationDrawerComponent } from './navigation-drawer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

describe('NavigationDrawerComponent', () => {
  let component: NavigationDrawerComponent;
  let fixture: ComponentFixture<NavigationDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NavigationDrawerComponent, 
        BrowserAnimationsModule
      ],
      providers: [
        provideRouter([])
      ]
    });
    fixture = TestBed.createComponent(NavigationDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});