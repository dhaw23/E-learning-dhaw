import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterstudentComponent } from './footerstudent.component';

describe('FooterstudentComponent', () => {
  let component: FooterstudentComponent;
  let fixture: ComponentFixture<FooterstudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterstudentComponent]
    });
    fixture = TestBed.createComponent(FooterstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
