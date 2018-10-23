import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { API } from '../utils/api';


@Injectable()
export class AuthService {

  constructor(private http: Http,
    private _router: Router) {
  }

  login(email: string, password: string) {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    return this.http.post(`${API.Authentication.Login.normal}`, formData)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let res = response.json();
        if (res && res.data && res.data.access_token) {
          const token = res.data.access_token;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', JSON.stringify(token));
        }
        if (res && res.data && res.data.expires_in) {
          setTimeout(() => {
            this.logout();
          }, res.data.expires_in * 1000);
        }
        return response.json();
      });
  }

  logout() {
    // remove user from local storage to log user out
    this._router.navigate(['/login']);
    this.http.post(`${API.Authentication.logout}`, {}, this.jwt()).map((response: Response) => response.json()).subscribe(res => {
      }, err => { }, () => {
        localStorage.removeItem('token');
      });

  }

  requestAccessTokenFromInstagram(code) {
    return this.http.post(`${API.Authentication.Login.instaUser}/${code}`, null)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let res = response.json()
        if (res && res.data && res.data.access_token) {
          let token = res.data.access_token;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', JSON.stringify(token));
        }
        if (res && res.data && res.data.expires_in) {
          setTimeout(() => {
            this.logout();
          }, res.data.expires_in * 1000);
        }
        return response.json();
      });
  }
newUser(body) {
  return this.http.post(`${API.Authentication.register}`, body, this.jwt()).map((response: Response) => response.json());
}
  userInfo() {
    return this.http.get(`${API.Authentication.Login.me}`, this.jwt()).map((response: Response) => response.json());
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
