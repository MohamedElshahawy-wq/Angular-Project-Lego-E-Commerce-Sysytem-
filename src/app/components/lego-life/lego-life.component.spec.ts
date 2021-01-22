import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoLifeComponent } from './lego-life.component';

describe('LegoLifeComponent', () => {
  let component: LegoLifeComponent;
  let fixture: ComponentFixture<LegoLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegoLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
