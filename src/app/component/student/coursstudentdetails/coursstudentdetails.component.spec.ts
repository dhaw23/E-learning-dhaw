import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursstudentdetailsComponent } from './coursstudentdetails.component';

describe('CoursstudentdetailsComponent', () => {
  let component: CoursstudentdetailsComponent;
  let fixture: ComponentFixture<CoursstudentdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursstudentdetailsComponent]
    });
    fixture = TestBed.createComponent(CoursstudentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
