import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-analytics-hashtag',
  templateUrl: './analytics-hashtag.component.html',
  styleUrls: ['./analytics-hashtag.component.scss']
})
export class AnalyticsHashtagComponent implements OnInit {
id: number;
media: any;
photos: any;
videos: any;
hashtagname: any;
  constructor(private _dashboardService: DashboardService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
    _router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let url = val.urlAfterRedirects.split('/');
        let id = url[url.length - 1];
        this.getSingleHashtagInfo(id);
      }
    });
    }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.params['id'];
    console.log(this.id);
    this.getSingleHashtagInfo(this.id);
  }


  getSingleHashtagInfo(id) {
    this._dashboardService.getSingleHashtag(id)
      .subscribe(res => {
        this.media = res.data.total.written_format;
        this.photos = res.data.images.written_format;
        this.videos = res.data.videos.written_format;
      });
  }

}
