import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListCategoryComponent } from './admin-list-category.component';

describe('AdminListCategoryComponent', () => {
  let component: AdminListCategoryComponent;
  let fixture: ComponentFixture<AdminListCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminListCategoryComponent]
    });
    fixture = TestBed.createComponent(AdminListCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
