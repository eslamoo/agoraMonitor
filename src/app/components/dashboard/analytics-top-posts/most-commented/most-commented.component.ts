import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-most-commented',
  templateUrl: './most-commented.component.html',
  styleUrls: ['./most-commented.component.scss']
})
export class MostCommentedComponent implements OnInit {
topCommentted: any[];

  constructor(private _dashboardService: DashboardService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {}
 
  ngOnInit() {
    this._dashboardService.getTopPosts()
      .subscribe(res => {
        // Get your data in your component's variable
        this.topCommentted = res.data.topCommentedMedia;
        console.log(this.topCommentted);
      });
  }


}
