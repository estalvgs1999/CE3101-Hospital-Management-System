import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalProcedureManagementComponent } from './medical-procedure-management.component';

describe('MedicalProcedureManagementComponent', () => {
  let component: MedicalProcedureManagementComponent;
  let fixture: ComponentFixture<MedicalProcedureManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalProcedureManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalProcedureManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
