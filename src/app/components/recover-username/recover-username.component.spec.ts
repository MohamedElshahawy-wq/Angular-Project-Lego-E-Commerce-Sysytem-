import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverUsernameComponent } from './recover-username.component';

describe('RecoverUsernameComponent', () => {
  let component: RecoverUsernameComponent;
  let fixture: ComponentFixture<RecoverUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverUsernameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
