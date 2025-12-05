import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-snackbar',
  imports: [MatSnackBarModule, MatButtonModule],
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