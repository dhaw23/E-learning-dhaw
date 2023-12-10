import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderprofComponent } from './headerprof.component';

describe('HeaderprofComponent', () => {
  let component: HeaderprofComponent;
  let fixture: ComponentFixture<HeaderprofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderprofComponent]
    });
    fixture = TestBed.createComponent(HeaderprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
