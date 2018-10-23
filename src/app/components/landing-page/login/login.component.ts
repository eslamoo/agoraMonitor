import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMsg: string;
  loading: boolean;
  returnUrl: string;
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', Validators.required);
  loginGroup: FormGroup;
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthService,
    fb: FormBuilder) {
    this.loginGroup = fb.group({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit() {
  }
  login() {
    this._authService.login(this.loginGroup.value.email, this.loginGroup.value.password)
      .subscribe(
      data => {
            // redirect to admin users to admin panel
            this._router.navigate(['/dashboard']);
      },
      error => {
        if (error.json() && error.json().message) {
          this.errorMsg = error.json().message;
          // this.loading = false;
        } else if (error.json() && error.json().data.message) {
          this.errorMsg = error.json().data.message;
          // this.loading = false;
        }
      }, () => {
        this.errorMsg = null;
      });
  }
}
