import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonManagementComponent } from './salon-management.component';

describe('SalonManagementComponent', () => {
  let component: SalonManagementComponent;
  let fixture: ComponentFixture<SalonManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
