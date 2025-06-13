import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnackbarComponent } from './snackbar.component';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SnackbarComponent],
      providers: [
        { 
          // Provide a mock value for MAT_SNACK_BAR_DATA
          provide: MAT_SNACK_BAR_DATA, 
          useValue: { 
            message: 'Test message',  // Sample message to display in the snackbar
            action: 'Test action',    // Sample action label for the snackbar
            showClose: true }         // Flag to indicate whether to show the close button
        },
        { 
          // Provide a mock for MatSnackBarRef to control snackbar behaviour.
          provide: MatSnackBarRef, 
          useValue: { 
            dismiss: jasmine.createSpy('dismiss'),                    // Mock dismiss method
            dismissWithAction: jasmine.createSpy('dismissWithAction') // Mock dismissWithAction method
          } 
        }
      ],
    });
    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});