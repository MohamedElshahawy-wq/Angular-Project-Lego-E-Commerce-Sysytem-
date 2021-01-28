import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBBagComponent } from './my-bbag.component';

describe('MyBBagComponent', () => {
  let component: MyBBagComponent;
  let fixture: ComponentFixture<MyBBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBBagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
