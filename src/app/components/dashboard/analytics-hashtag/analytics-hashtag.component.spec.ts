import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsHashtagComponent } from './analytics-hashtag.component';

describe('AnalyticsHashtagComponent', () => {
  let component: AnalyticsHashtagComponent;
  let fixture: ComponentFixture<AnalyticsHashtagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsHashtagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsHashtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
