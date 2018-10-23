import { Component, OnInit, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-analytics-competitors',
  templateUrl: './analytics-competitors.component.html',
  styleUrls: ['./analytics-competitors.component.scss']
})
export class AnalyticsCompetitorsComponent implements OnInit {
  competitors: any[];
  chart = new Chart ({
  chart: {
    type: 'line'
  },
  title: {
    text: 'linearchart'
  },
  series: [{
    name: 'Line 1',
    data: [10, 20, 30, 40, 50]
  }],
  credits: {
    enabled: false
  }
  });
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 100));
  }
  constructor(private _dashboardService: DashboardService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
  }

  ngOnInit() {
    this._dashboardService.getCompetitors()
      .subscribe(res => {this.competitors = res.data; });
  }
}
