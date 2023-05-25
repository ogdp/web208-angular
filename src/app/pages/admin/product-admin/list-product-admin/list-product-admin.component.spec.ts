import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductAdminComponent } from './list-product-admin.component';

describe('ListProductAdminComponent', () => {
  let component: ListProductAdminComponent;
  let fixture: ComponentFixture<ListProductAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductAdminComponent]
    });
    fixture = TestBed.createComponent(ListProductAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
