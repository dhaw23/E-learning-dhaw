import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutprofComponent } from './layoutprof.component';

describe('LayoutprofComponent', () => {
  let component: LayoutprofComponent;
  let fixture: ComponentFixture<LayoutprofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutprofComponent]
    });
    fixture = TestBed.createComponent(LayoutprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
