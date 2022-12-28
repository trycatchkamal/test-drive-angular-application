import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EmployeesComponent } from './employees.component';
import { Employee } from '../../models/employee.model';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should exist', () => {
    expect(component).toBeTruthy();
  });

  it('Should have employee table',()=>{
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#employee-table'))).toBeTruthy();
  });

  it('Should have all the columns in employee table',()=>{
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#employee-table-header-Id'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#employee-table-header-Name'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#employee-table-header-Location'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#employee-table-header-Email'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#employee-table-header-Mobile'))).toBeTruthy();
  });

  it('Display the given records',()=>{
    component.employees = [{} as Employee];
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('[data-employee=employee-record]'))).toBeTruthy();
  });
});
