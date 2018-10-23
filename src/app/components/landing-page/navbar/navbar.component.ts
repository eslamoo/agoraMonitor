import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
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
