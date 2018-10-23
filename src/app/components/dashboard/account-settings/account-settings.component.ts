import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AccountSettingsComponent implements OnInit {
  timeZoneList: any[];
  emailDigests: any[];
  plans: any[];
  invoices: any[];
  email: string;

    user: User = {
    old_password: '',
    password: '',
    password_confirmation: ''
  };
  timezone: any;
  errorMsgs: any;
  successMsg: any;
  wrongPass:  any;
  plan: any;
  planName: any;
  planAmount: any;
  errorMsgsPlan: any;
  updateErrorMsgs: string;
  updateSuccessMsg: string;
  constructor(private _dashboardService: DashboardService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router,
              private _snackBar: MatSnackBar) {
     }

  ngOnInit() {
    this._dashboardService.getAccountSettings()
      .subscribe(res => {
        this.timeZoneList = res.data.timeZoneList;
        this.emailDigests = res.data.emailDigests;
        console.log(this.timezone);
      });
    this._dashboardService.getPlans()
      .subscribe(res => {
        this.plans = res.data;
      });
    this._dashboardService.getInvoices()
      .subscribe(res => {
        this.invoices = res.data.invoices;
      });
    this._dashboardService.getUserEmail()
      .subscribe(res => {
        this.email = res.data.email;
        this.planName = res.data.plan.plan_name;
        this.planAmount = res.data.plan.amount_cents;
      });
  }
  updateUser() {
    this._dashboardService.updateUserData({ email: this.email , timezone: this.timezone })
      .subscribe(res => {
        if (res.data.status_code === 200) {
          this.openSnackBar(res.data.message, 'success-snack');
          res.updateSuccessMsg = res.json().data.message;
          console.log(res.updateSuccessMsg);
        }
        this.updateErrorMsgs = null;
      }, err => {
        this.updateErrorMsgs = err.json();
        console.log(err.updateErrorMsgs);
      });
  }
  changePass() {
    this.errorMsgs = null;
    this._dashboardService.changePassword(this.user).subscribe(res => {
      if (res.data.status_code === 200) {
        this.openSnackBar(res.data.message, 'success-snack');
        this.successMsg = res.data.message;
        this._router.navigate(['/login']);
      }
      this.errorMsgs = null;
    }, err => {
      this.errorMsgs = err.json();
      if (err.json().data.status_code === 422) {
        this.wrongPass = err.json().data.message;
      }
    });
  }
  upPlan() {
    this._dashboardService.upgradePlan({ plan: this.plan }).subscribe(res => {
      if (res.data.status_code === 200) {
        this.openSnackBar(res.data.message, 'success-snack');
        this.successMsg = res.data.message;
      }
      this.errorMsgs = null;
    }, err => {
      if (err.json().data.status_code === 422) {
        this.errorMsgsPlan = err.json();
      }
    });
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


export interface User {
  old_password: string;
  password: string;
  password_confirmation: string;
}
