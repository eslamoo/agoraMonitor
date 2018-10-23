import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCompetitorsComponent } from './analytics-competitors.component';

describe('AnalyticsCompetitorsComponent', () => {
  let component: AnalyticsCompetitorsComponent;
  let fixture: ComponentFixture<AnalyticsCompetitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsCompetitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsCompetitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
