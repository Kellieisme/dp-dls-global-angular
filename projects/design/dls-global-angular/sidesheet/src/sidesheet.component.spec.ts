import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideSheetComponent } from './sidesheet.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('SidesheetComponent', () => {
  let component: SideSheetComponent;
  let fixture: ComponentFixture<SideSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SideSheetComponent, BrowserAnimationsModule],
      providers: [
        provideRouter([]),
        provideAnimations(),
        provideHttpClient(),
      ]
    });
    fixture = TestBed.createComponent(SideSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});