import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers: any[];
  constructor(private _dashboardService: DashboardService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._dashboardService.getFollowers()
      .subscribe(res => {
        this.followers = res.data.result;
        console.log(this.followers);
      });
  }

}
