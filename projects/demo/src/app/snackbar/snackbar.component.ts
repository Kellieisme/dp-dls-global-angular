import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-snackbar',
  imports: [MatSnackBarModule],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
 private _snackBar = inject(MatSnackBar);

  openSnackBar() {
    this._snackBar.open('This is a snackbar message!', 'Close', {
      duration: 3000,
    });
  }
}