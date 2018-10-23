import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(
    private _auth: AuthService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {

  }
  search(query) {
    this._router.navigate(['/dashboard/results'], { queryParams: { q: query } });
  }
logout() {
  this._auth.logout();
  }
}
