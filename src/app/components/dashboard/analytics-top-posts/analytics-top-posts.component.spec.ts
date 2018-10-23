import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsTopPostsComponent } from './analytics-top-posts.component';

describe('AnalyticsTopPostsComponent', () => {
  let component: AnalyticsTopPostsComponent;
  let fixture: ComponentFixture<AnalyticsTopPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsTopPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsTopPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
