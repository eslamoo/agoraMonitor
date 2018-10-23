import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsHashtagsComponent } from './analytics-hashtags.component';

describe('AnalyticsHashtagsComponent', () => {
  let component: AnalyticsHashtagsComponent;
  let fixture: ComponentFixture<AnalyticsHashtagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsHashtagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsHashtagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
