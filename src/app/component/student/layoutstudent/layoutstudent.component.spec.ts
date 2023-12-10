import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutstudentComponent } from './layoutstudent.component';

describe('LayoutstudentComponent', () => {
  let component: LayoutstudentComponent;
  let fixture: ComponentFixture<LayoutstudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutstudentComponent]
    });
    fixture = TestBed.createComponent(LayoutstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
