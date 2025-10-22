import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartExamplesComponent } from './chart-examples.component';

describe('ChartExamplesComponent', () => {
  let component: ChartExamplesComponent;
  let fixture: ComponentFixture<ChartExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartExamplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
