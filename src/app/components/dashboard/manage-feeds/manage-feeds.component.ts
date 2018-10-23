import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { MatChipInputEvent, MatChipRemove } from '@angular/material';
import { MatSnackBar } from '@angular/material';
declare var $;
@Component({
  selector: 'app-manage-feeds',
  templateUrl: './manage-feeds.component.html',
  styleUrls: ['./manage-feeds.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManageFeedsComponent implements AfterViewInit, OnInit {
@ViewChild('myInput') myInput;
// @ViewChild('myInputTag') myInputTag;
myControl: FormControl = new FormControl();
// myControlTag: FormControl = new FormControl();
filteredOptions: Observable<string[]>;
// filteredOptionsHashtags: Observable<string[]>;
tags: FormData = new FormData();
// chips properties
visible: true;
selectable:  true;
removable:  true;
addOnBlur: true;
keyowords = [];
// Enter, comma
separatorKeysCodes = [ENTER, COMMA];
id: any;
users = [];
feeds: any[];
name: string;
hashtags = [];
errorMsgs: any;
removeFeedSuccess: any;
removeFeedError: any;
addFeedSuccess: any;
addFeedError: any;
usersError: any;
hashtagsError: any;
userID: any;
isRemoveLoading = false;
isRemoveLoaded = false;

  constructor(private _dashboardService: DashboardService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router,
              private _snackBar: MatSnackBar) { }


ngOnInit() {
    this._dashboardService.getFeeds()
    .subscribe(res => {
      this.feeds = res.data.feeds;
      });
    setTimeout(() => {
      this.filteredOptions = this.myControl.valueChanges
        .startWith('')
        .debounceTime(100)
        .switchMap((val: string) => {
          return this.getSearchUsers(val);
        })
        .map(res => {
          return res.data;
        });
    }, 500);
  }



  ngAfterViewInit() {
  //   setTimeout(() => {
  //     $('[data-fancybox]').fancybox({
  //       afterShow: (instance, current) => {

  //         setTimeout(() => {
  //           this.filteredOptions = this.myControl.valueChanges
  //             .startWith('')
  //             .debounceTime(100)
  //             .switchMap((val: string) => {
  //               return this.getSearchUsers(val);
  //             })
  //             .map(res => {
  //               return res.data;
  //             });
  //         }, 300);
  //       }
  //     });
  //   }, 300);
   }



  remove(fruit: any): void {
    let index = this.users.indexOf(fruit);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }



  getSearchUsers(q) {
    if (q.length > 2) {
   return this._dashboardService.getSearchUsers(q);
    }else {
      return Observable.of([]);
    }
  }


  // getSearchHashtags(q) {
  //   if (q.length > 2) {
  //   this._dashboardService.getSearchhashtags(q);
  // } else {
  //     return Observable.of([]);
  //   }
  // }


  optionSelected(event) {
    let name = event.option.value;
    this.users.push({ text: name.trim() });
    this.myInput.nativeElement.value = '';
  }

  // optionTagSelected(event) {
  //   let name = event.option.value;
  //   this.hashtags.push({ text: name.trim() });
  //   this.myInputTag.nativeElement.value = '';
  // }



submitAdd(id) {
  this.users.forEach(element => {
    this.tags.append('tags[]', element.name);
  });
  this.errorMsgs = null;
  this._dashboardService.submitAdd(id, this.users).subscribe(res => {
    if (res.data.status_code === 200) {
      this.openSnackBar(res.data.message, 'success-snack');
    }
    this.errorMsgs = null;
  }, err => {
    this.errorMsgs = err.json().errors;
    this.openSnackBar(err.json().message, 'error-snack');
  });
}

addFeed() {
  this.addFeedSuccess = null;
  this.removeFeedError = null;
  this._dashboardService.addFeed({name : this.name})
    .subscribe(res => {
      this.removeFeedError = false;
      this.addFeedSuccess = res.data.name;
      console.log(this.name);
    }, err => {
      this.addFeedSuccess = false;
      this.addFeedError = err.json().name;
    });
  this.addFeedSuccess = '';
  this.removeFeedError = '';
  this.resetModalData();
}



removeFeed(id) {
  this.isRemoveLoading = true;
  this._dashboardService.removeFeed(id)
    .subscribe(res => {
      this.removeFeedSuccess = res.data.message;
      this.isRemoveLoading = false;
      $.fancybox.open({
        src: '#SuccessModal',
        type: 'inline',
        opts: {
          afterShow: function (instance, current) {
            console.log('Feed Removed!');
          }
        }
      });
    }, err => {
      this.removeFeedError = err.json().data.message;
    });
  this.resetModalData();

}




  resetModalData() {
      $('[data-fancybox]').fancybox({
        afterClose: (instance, current) => {
          this.removeFeedSuccess = null;
          this.removeFeedError = null;
          this.addFeedSuccess = null;
          this.addFeedError = null;
          this.name = '';
          this.users = null;
          this.hashtags = null;
          this.usersError = '';
          this.hashtagsError = '';
        }
      });
  }


  openSnackBar(message, actionClass) {
    this._snackBar.open(message, null, {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['snack', actionClass]
    });
  }
}
