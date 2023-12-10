import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorielistComponent } from './categorielist.component';

describe('CategorielistComponent', () => {
  let component: CategorielistComponent;
  let fixture: ComponentFixture<CategorielistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorielistComponent]
    });
    fixture = TestBed.createComponent(CategorielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
