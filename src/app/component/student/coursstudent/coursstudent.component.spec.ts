import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursstudentComponent } from './coursstudent.component';

describe('CoursstudentComponent', () => {
  let component: CoursstudentComponent;
  let fixture: ComponentFixture<CoursstudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursstudentComponent]
    });
    fixture = TestBed.createComponent(CoursstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
