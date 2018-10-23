import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PasswordsService } from '../../../services/passwords.service';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { API } from '../../../utils/api';
@Component({
  selector: 'app-forget-pasword',
  templateUrl: './forget-pasword.component.html',
  styleUrls: ['./forget-pasword.component.scss']
})

export class ForgetPaswordComponent implements OnInit {
  errorMsg: string;
  error1: string;
  successMsg: string;
  showSpinner: boolean;
  forgetPassGroup: FormGroup;
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(private _passwordsService: PasswordsService, fb: FormBuilder) {
    this.forgetPassGroup = fb.group({
      email: this.email,
    });
   }

  ngOnInit() {
  }
 sendPassword() {
    this._passwordsService.sendPass(this.forgetPassGroup.value.email)
      .subscribe(
        data => {
          this.errorMsg = '';
          this.error1 = '';
        this.successMsg = data.data;
      },
      error => {
        this.errorMsg = error.json().email;
        this.error1 = error.json().data.message;
      }, () => {
        this.errorMsg = null;
      });
  }
}
