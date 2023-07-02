import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateCategoryComponent } from './admin-update-category.component';

describe('AdminUpdateCategoryComponent', () => {
  let component: AdminUpdateCategoryComponent;
  let fixture: ComponentFixture<AdminUpdateCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUpdateCategoryComponent]
    });
    fixture = TestBed.createComponent(AdminUpdateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
