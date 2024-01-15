import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngCalendarComponent } from './ang-calendar.component';

describe('AngCalendarComponent', () => {
  let component: AngCalendarComponent;
  let fixture: ComponentFixture<AngCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngCalendarComponent]
    });
    fixture = TestBed.createComponent(AngCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
