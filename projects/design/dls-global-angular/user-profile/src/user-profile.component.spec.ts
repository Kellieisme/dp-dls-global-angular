import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileComponent } from './user-profile.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTabsModule, MatIconModule, MatButtonModule, MatToolbarModule],
      providers: [provideAnimations(), provideHttpClient(), provideRouter([])]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;

    // set the required input property
    component.userFirstName = 'Atmosphere'

    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserProfileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
