import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursproflistComponent } from './coursproflist.component';

describe('CoursproflistComponent', () => {
  let component: CoursproflistComponent;
  let fixture: ComponentFixture<CoursproflistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursproflistComponent]
    });
    fixture = TestBed.createComponent(CoursproflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
