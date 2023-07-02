import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAboutUsComponent } from './contact-about-us.component';

describe('ContactAboutUsComponent', () => {
  let component: ContactAboutUsComponent;
  let fixture: ComponentFixture<ContactAboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactAboutUsComponent]
    });
    fixture = TestBed.createComponent(ContactAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
