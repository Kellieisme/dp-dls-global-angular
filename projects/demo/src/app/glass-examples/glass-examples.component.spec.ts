import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassExamplesComponent } from './glass-examples.component';

describe('GlassExamplesComponent', () => {
  let component: GlassExamplesComponent;
  let fixture: ComponentFixture<GlassExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassExamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
