import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-followings',
  templateUrl: './followings.component.html',
  styleUrls: ['./followings.component.scss']
})
export class FollowingsComponent implements OnInit {
  followings: any[];
  constructor(private _dashboardService: DashboardService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._dashboardService.getFollowings()
      .subscribe(res => {
        this.followings = res.data.result;
        console.log(this.followings);
      });
  }

}
