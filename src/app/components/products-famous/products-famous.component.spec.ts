import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFamousComponent } from './products-famous.component';

describe('ProductsFamousComponent', () => {
  let component: ProductsFamousComponent;
  let fixture: ComponentFixture<ProductsFamousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsFamousComponent]
    });
    fixture = TestBed.createComponent(ProductsFamousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
