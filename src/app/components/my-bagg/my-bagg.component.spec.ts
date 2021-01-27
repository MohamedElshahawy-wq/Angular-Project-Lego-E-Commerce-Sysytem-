import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBaggComponent } from './my-bagg.component';

describe('MyBaggComponent', () => {
  let component: MyBaggComponent;
  let fixture: ComponentFixture<MyBaggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBaggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBaggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
