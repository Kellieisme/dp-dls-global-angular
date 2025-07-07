import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {SwitchPageComponent} from './slide-toggle.component';

describe('SwitchPageComponent', () => {
  let component: SwitchPageComponent;
  let fixture: ComponentFixture<SwitchPageComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [SwitchPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SwitchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
