import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsPageComponent } from './chips.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

describe('ChipsPageComponent', () => {
  let component: ChipsPageComponent;
  let fixture: ComponentFixture<ChipsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsPageComponent, BrowserAnimationsModule],
      providers: [
        provideRouter([])
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
