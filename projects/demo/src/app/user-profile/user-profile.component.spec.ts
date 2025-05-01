import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {UserProfilePageComponent} from './user-profile.component';

describe('UserProfilePageComponent', () => {
  let component: UserProfilePageComponent;
  let fixture: ComponentFixture<UserProfilePageComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [UserProfilePageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
