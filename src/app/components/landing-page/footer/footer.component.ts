import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  inDashboard: boolean = false;
  isLoggedIn: boolean = false;

  constructor(public _authService: AuthService,
    public _router: Router) {
    _router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && val.urlAfterRedirects.includes('/login') === false) {
        this.checkIfLoggedIn();
        this.inDashboard = val.urlAfterRedirects.includes('/dashboard') ? true : false;
      }
    });
  }

  ngOnInit() {
  }
  checkIfLoggedIn() {
    this.isLoggedIn = localStorage.getItem('token') ? true : false;
  }
}
