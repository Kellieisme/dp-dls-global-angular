import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressIndicatorComponent } from './progress-indicator.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('ProgressIndicatorComponent', () => {
  let component: ProgressIndicatorComponent;
  let fixture: ComponentFixture<ProgressIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProgressIndicatorComponent,
        MatProgressBarModule,
        MatProgressSpinnerModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display main heading', () => {
    const h4 = fixture.nativeElement.querySelector('h4');
    expect(h4.textContent).toContain('Progress Indicators');
  });

  it('should display a determinate progress bar with value 40 and modified value to 60', () => {
    const determinateProgressBar = fixture.nativeElement.querySelector('mat-progress-bar[mode="determinate"]');
    expect(determinateProgressBar).toBeTruthy();
    expect(determinateProgressBar.getAttribute('aria-valuenow')).toBe('40');

    component.determinateBarValue = 60;
    fixture.detectChanges(); //Trigger change detection to reflect the new value

    expect(determinateProgressBar).toBeTruthy();
    expect(determinateProgressBar.getAttribute('aria-valuenow')).toBe('60'); // Chcking the Value attribute.
  });

  it('should display an indeterminate progress bar', () => {
    const indeterminateProgressBar = fixture.nativeElement.querySelector('mat-spinner[mode="indeterminate"]');
    expect(indeterminateProgressBar).toBeTruthy(); // Check if the element is present
  });

  it('should display determinate progress spinner with value 40 and modified value to 60', () => {
    const determinateProgressSpinner = fixture.nativeElement.querySelector('mat-spinner[mode="determinate"]');
    expect(determinateProgressSpinner).toBeTruthy();
    expect(determinateProgressSpinner.getAttribute('aria-valuenow')).toBe('40');

    component.determinateSpinnerValue = 65;
    fixture.detectChanges();

    expect(determinateProgressSpinner).toBeTruthy();
    expect(determinateProgressSpinner.getAttribute('aria-valuenow')).toBe('65');
  })
});
