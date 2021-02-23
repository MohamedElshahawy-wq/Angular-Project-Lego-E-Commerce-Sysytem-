import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterCheckoutComponent } from './after-checkout.component';

describe('AfterCheckoutComponent', () => {
  let component: AfterCheckoutComponent;
  let fixture: ComponentFixture<AfterCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
