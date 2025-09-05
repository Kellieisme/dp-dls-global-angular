import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassExampleComponent } from './glass-example.component';

describe('GlassExampleComponent', () => {
  let component: GlassExampleComponent;
  let fixture: ComponentFixture<GlassExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
