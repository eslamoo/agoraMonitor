import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PasswordsService } from '../../../services/passwords.service';
import { MatSnackBar } from '@angular/material';
import { AbstractControl } from '@angular/forms';
import { ObjectKeysPipe } from '../../../pipes/object-keys.pipe';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],

})


export class ResetPasswordComponent implements OnInit {
  resetGroup: FormGroup;
  errorMsgs: any;
  token: string;
  sucessMsg: string;
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  password_confirmation: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  constructor(private _passwords: PasswordsService,
              private _route: ActivatedRoute,
              public _snackBar: MatSnackBar,
              fb: FormBuilder) {
              this.resetGroup = fb.group({
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
              });
            }
  // static MatchPassword(AC: AbstractControl) {
  //   let password = AC.get('password').value; // to get value in input tag
  //   let password_confirmation = AC.get('password_confirmation').value; // to get value in input tag
  //   if (password !== password_confirmation) {
  //     console.log('false');
  //     AC.get('password_confirmation').setErrors({ MatchPassword: true })
  //   } else {
  //     console.log('true');
  //     return null
  //   }
  // }
  ngOnInit() {
    this.token = this._route.snapshot.queryParams['token'] || null;
  }
  resetPass() {
    this.errorMsgs = null;
    this._passwords.resetPassword(this.resetGroup.value.email,
                                  this.resetGroup.value.password,
                                  this.resetGroup.value.password_confirmation,
                                  this.token)
    .subscribe(
      res => {
        if (res.data.status_code === 200) {
          this.sucessMsg = res.json();
          // this.openSnackBar(res.json(), 'Ok');
        }
        this.errorMsgs = null;
      },
      error => {
        this.errorMsgs = error.json();
        // this._snackBar.open(this.errorMsgs.ObjectKeys, "Got it");
        console.log(this.errorMsgs);
      });
  }
}


