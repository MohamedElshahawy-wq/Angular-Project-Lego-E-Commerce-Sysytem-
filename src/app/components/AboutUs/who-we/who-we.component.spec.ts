import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeComponent } from './who-we.component';

describe('WhoWeComponent', () => {
  let component: WhoWeComponent;
  let fixture: ComponentFixture<WhoWeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
