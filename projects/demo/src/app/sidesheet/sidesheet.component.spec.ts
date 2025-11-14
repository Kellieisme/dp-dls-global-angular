import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideSheetComponent } from './sidesheet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

describe('SidesheetComponent', () => {
  let component: SideSheetComponent;
  let fixture: ComponentFixture<SideSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SideSheetComponent, BrowserAnimationsModule],
      providers: [
        provideRouter([])
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