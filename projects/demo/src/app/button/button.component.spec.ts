import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ButtonPageComponent } from './button.component';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

describe('ButtonPageComponent', () => {
  let component: ButtonPageComponent;
  let fixture: ComponentFixture<ButtonPageComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [ButtonPageComponent, BrowserAnimationsModule],
      providers: [
        provideRouter([]),
        provideAnimations(),
        provideHttpClient(),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
