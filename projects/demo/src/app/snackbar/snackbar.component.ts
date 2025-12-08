import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'snackbar-page',
  imports: [MatSnackBarModule, MatButtonModule],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarPageComponent {
 private _snackBar = inject(MatSnackBar);

  openSnackBar() {
    this._snackBar.open('This is a snackbar message!', 'Close', {
      duration: 3000,
    });
  }
}