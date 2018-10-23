import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
q: any;
users: any[];
tags: any[];
  noUsersResults= 'There is no users matching your search';
  constructor(private _dashboardService: DashboardService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { 
    _router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let url = val.urlAfterRedirects.split('?q=');
        let q = url[url.length - 1];
        this.getSearch(q);
      }
    });
     }

  ngOnInit() {
  }
getSearch(q) {
  this.q = this._activatedRoute.snapshot.queryParams['q'];
  this._dashboardService.getSearchResults(this.q)
    .subscribe(res => {
      this.users = [];
      this.tags = [];
      this.users = res.data.users;
      this.tags = res.data.tags;
    }, err => {

    }, () => {

    });
}
}
