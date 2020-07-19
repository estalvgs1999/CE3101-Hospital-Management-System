import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalEquipmentManagementComponent } from './medical-equipment-management.component';

describe('MedicalEquipmentManagementComponent', () => {
  let component: MedicalEquipmentManagementComponent;
  let fixture: ComponentFixture<MedicalEquipmentManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalEquipmentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalEquipmentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
