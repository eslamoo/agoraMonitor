import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCompetitorComponent } from './analytics-competitor.component';

describe('AnalyticsCompetitorComponent', () => {
  let component: AnalyticsCompetitorComponent;
  let fixture: ComponentFixture<AnalyticsCompetitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsCompetitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsCompetitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
