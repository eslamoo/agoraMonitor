import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  hashtags: any[];
  competitors: any[];
  feeds: any[];
  constructor(private _dashboardService: DashboardService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }


  ngOnInit() {
    this._dashboardService.getHashtags().subscribe(res => {this.hashtags = res.data; });
    this._dashboardService.getCompetitors().subscribe(res => {this.competitors = res.data; });
    this._dashboardService.getFeeds().subscribe(res => { this.feeds = res.data.feeds; });
  }

}
