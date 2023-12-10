import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesprofComponent } from './coursesprof.component';

describe('CoursesprofComponent', () => {
  let component: CoursesprofComponent;
  let fixture: ComponentFixture<CoursesprofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesprofComponent]
    });
    fixture = TestBed.createComponent(CoursesprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
