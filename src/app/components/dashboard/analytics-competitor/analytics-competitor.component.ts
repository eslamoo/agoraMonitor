import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-analytics-competitor',
  templateUrl: './analytics-competitor.component.html',
  styleUrls: ['./analytics-competitor.component.scss']
})
export class AnalyticsCompetitorComponent implements OnInit {
id: number;
competitor: any[];
avatar: string;
nickname: string;
name: string;
media: any;
followers: any;
following: any;


  constructor(private _dashboardService: DashboardService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
    _router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let url = val.urlAfterRedirects.split('/');
        let id = url[url.length - 1];
        this.getSingleCompetitor(id);
      }
    });
    }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.getSingleCompetitor(this.id);
  }


  getSingleCompetitor(id) {
      this._dashboardService.getSingleCompetitor(id)
        .subscribe(res => {
        this.competitor = res.data;
        this.avatar = res.data.avatar;
        this.nickname = res.data.nickname;
        this.name = res.data.name;
        this.media = res.data.media.written_format;
        this.followers = res.data.followers.written_format;
        this.following = res.data.followings.written_format;
  });
  }

}
