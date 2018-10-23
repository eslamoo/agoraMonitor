import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable, Subject } from 'rxjs';
import { API } from '../utils/api';
@Injectable()
export class PasswordsService {

  constructor(private http: Http) { }
  sendPass(email: string) {
    let formData = new FormData();

    formData.append('email', email);
    return this.http.post(`${API.Authentication.forgotPassword}`, formData)
      .map((response: Response) => response.json());
  }

  resetPassword(email: string, password: string, password_confirmation: string, token: string) {
    const resetData = new FormData();
    resetData.append('email', email);
    resetData.append('password', password);
    resetData.append('password_confirmatio', password_confirmation);
    resetData.append('token', token);
    return this.http.post(`${API.Authentication.resetPassword}`, resetData)
    .map((response: Response) => response.json());
  }
  private jwt(params?) {
    // create authorization header with jwt token
    let token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + token });
      return new RequestOptions({ headers: headers });
    }
  }
}
