import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoGroupComponent } from './lego-group.component';

describe('LegoGroupComponent', () => {
  let component: LegoGroupComponent;
  let fixture: ComponentFixture<LegoGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegoGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
