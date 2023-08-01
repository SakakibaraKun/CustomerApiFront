import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianDeleteComponent } from './technician-delete.component';

describe('TechnicianDeleteComponent', () => {
  let component: TechnicianDeleteComponent;
  let fixture: ComponentFixture<TechnicianDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicianDeleteComponent]
    });
    fixture = TestBed.createComponent(TechnicianDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
