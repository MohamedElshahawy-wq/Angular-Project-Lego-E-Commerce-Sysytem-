import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainabilityComponent } from './sustainability.component';

describe('SustainabilityComponent', () => {
  let component: SustainabilityComponent;
  let fixture: ComponentFixture<SustainabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SustainabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SustainabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
