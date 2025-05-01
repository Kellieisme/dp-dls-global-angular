import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbPageComponent } from './breadcrumb.component';
import { provideRouter } from '@angular/router';

describe('BreadcrumbPageComponent', () => {
  let component: BreadcrumbPageComponent;
  let fixture: ComponentFixture<BreadcrumbPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbPageComponent],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
