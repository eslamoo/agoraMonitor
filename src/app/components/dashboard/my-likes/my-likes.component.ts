import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-my-likes',
  templateUrl: './my-likes.component.html',
  styleUrls: ['./my-likes.component.scss']
})
export class MyLikesComponent implements OnInit {
  likes: any[];
  constructor(private _dashboardService: DashboardService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._dashboardService.getlikes()
      .subscribe(res => {
        this.likes = res.data.media;
        console.log(this.likes);
      });
  }

}
