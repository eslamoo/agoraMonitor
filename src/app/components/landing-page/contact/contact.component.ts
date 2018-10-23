import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../utils/api';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // compatetors: any[];
  errorMsgs: string;
  successMsg: string;
  contactGroup: FormGroup;
  name: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  subject: FormControl = new FormControl();
  message: FormControl = new FormControl();
  constructor(private _contactService: ContactService, fb: FormBuilder) {
    this.contactGroup = fb.group({
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    });
  }

  ngOnInit() {
  }
  sendMsg() {
    this._contactService.contactUs(this.contactGroup.value.name,
                                   this.contactGroup.value.email,
                                   this.contactGroup.value.subject,
                                   this.contactGroup.value.message)
      .subscribe(data => {
        this.successMsg = data.data.message;
      },
      error => {
          this.errorMsgs = error.json();
      }, () => {
        this.errorMsgs = null;
      });
  }
}
