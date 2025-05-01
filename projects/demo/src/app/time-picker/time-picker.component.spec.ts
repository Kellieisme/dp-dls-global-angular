import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerPageComponent } from './time-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

describe('TimePickerComponent', () => {
  let component: TimePickerPageComponent;
  let fixture: ComponentFixture<TimePickerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimePickerPageComponent, BrowserAnimationsModule],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimePickerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
