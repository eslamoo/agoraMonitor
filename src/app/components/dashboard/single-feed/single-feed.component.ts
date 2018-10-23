import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
declare var $;
@Component({
  selector: 'app-single-feed',
  templateUrl: './single-feed.component.html',
  styleUrls: ['./single-feed.component.scss']
})
export class SingleFeedComponent implements OnInit {
id: number;
posts: any[];
  constructor(private _dashboardService: DashboardService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
        _router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let url = val.urlAfterRedirects.split('/');
        let id = url[url.length - 1];
        this.id = this._activatedRoute.snapshot.params['id'];
        this.getSingleFeed(this.id);
      }
     });
   }

  ngOnInit() {
    const filterArea = $('.profile-details-filters .filters-area');
    $('.profile-details-filters .toggle-filters').on('click', function () {
      if (filterArea.css('display') === 'block') {
        filterArea.css('display', 'none');
        $('.profile-details-filters .show').css('display', 'block');
        $('.profile-details-filters .hide').css('display', 'none');
      } else {
        filterArea.css('display', 'block');
        $('.profile-details-filters .show').css('display', 'none');
        $('.profile-details-filters .hide').css('display', 'inline-block');
      }
    });
  }

  getSingleFeed(id) {
    this._dashboardService.getSingleFeed(id)
      .subscribe(res => {
         this.posts = res.data.posts;
      });
  }
}
