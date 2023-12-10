import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterprofComponent } from './footerprof.component';

describe('FooterprofComponent', () => {
  let component: FooterprofComponent;
  let fixture: ComponentFixture<FooterprofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterprofComponent]
    });
    fixture = TestBed.createComponent(FooterprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
