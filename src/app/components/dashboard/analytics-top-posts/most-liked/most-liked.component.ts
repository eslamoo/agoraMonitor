import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

declare var $: any;

@Component({
  selector: 'app-most-liked',
  templateUrl: './most-liked.component.html',
  styleUrls: ['./most-liked.component.scss']
})
export class MostLikedComponent implements OnInit {
  topLiked: any[];
  id: any;
  comments: any[];
  isCommentsLoaded = false;
  isCommentsLoading = false;
  errorMsg: string;
  constructor(private _dashboardService: DashboardService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {}

  ngOnInit() {
    this._dashboardService.getTopPosts()
      .subscribe(res => {
        this.topLiked = res.data.topLikedMedia;
        this.resetModalData();
        console.log(this.topLiked);
      });
  }
  loadComments(id) {
    this.isCommentsLoading = true;
    this._dashboardService.getTopPostsComments(id)
      .subscribe(res => {
        this.comments = res.data.comments;
        this.isCommentsLoaded = true;
        console.log(this.comments);
        this.isCommentsLoading = false;
      }, err => {
        this.errorMsg = err.json();
        this.isCommentsLoading = false;
      });
  }

  resetModalData() {
    setTimeout(() => {
      $('[data-fancybox]').fancybox({
        afterClose : ( instance, current ) => {
          this.isCommentsLoaded = false;
          this.comments = [];
        }
      });
      }, (500));
  }

}
