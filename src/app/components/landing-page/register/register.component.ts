import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class RegisterComponent implements OnInit {
  user: newUser = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: ''
  };
  errorMsgs: any;
  successMsg: string;
  mustLogout: string;
  constructor(private _authService: AuthService,
              private _snackBar: MatSnackBar,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }
  ngOnInit() {
  }
  register() {
    this.errorMsgs = null;
    this._authService.newUser(this.user).subscribe(
      res => {
      if (res.data.status_code === 200) {
        // this.openSnackBar(res.data.message, 'success-snack');
        this.successMsg = res.json();
        this._router.navigate(['/login']);
      }
      this.errorMsgs = null;
    }, err => {
      this.errorMsgs = err.json();
      this.mustLogout = err.json().data;
      // this.openSnackBar(err.json().first_name[0], 'error-snack');
    }
  );
  }
  openSnackBar(message, actionClass) {
    this._snackBar.open(message, null, {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['snack', actionClass]
    });
  }
}
export interface newUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  terms: string;
}
