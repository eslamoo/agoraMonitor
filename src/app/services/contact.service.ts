import { Injectable } from '@angular/core';

import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { API } from '../utils/api';
@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  contactUs(name: string, email: string, subject: string, message: string) {
   
    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);
    return this.http.post(`${API.contactUs}`, formData)
      .map((res:any)  => res.json());
}
}
