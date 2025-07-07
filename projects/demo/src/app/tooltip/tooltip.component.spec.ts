import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {TooltipPageComponent} from './tooltip.component';

describe('TooltipPageComponent', () => {
  let component: TooltipPageComponent;
  let fixture: ComponentFixture<TooltipPageComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [TooltipPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TooltipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
