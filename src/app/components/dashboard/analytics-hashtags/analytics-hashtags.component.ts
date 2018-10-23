import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-analytics-hashtags',
  templateUrl: './analytics-hashtags.component.html',
  styleUrls: ['./analytics-hashtags.component.scss']
})
export class AnalyticsHashtagsComponent implements OnInit {
  hashtags: any[];
  constructor(private _dashboardService: DashboardService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._dashboardService.getHashtags()
      .subscribe(res => {
        // Get your data in your component's variable
        this.hashtags = res.data;
      });
  }

}
