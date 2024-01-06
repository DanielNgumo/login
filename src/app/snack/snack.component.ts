import { Component } from '@angular/core';
import { inject } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css'],
})
export class SnackComponent {
  durationInSeconds: any;
  openSnackBar() {
    throw new Error('Method not implemented.');
  }
}
