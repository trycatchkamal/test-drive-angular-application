import { TestBed } from '@angular/core/testing';
import { Employee } from '../models/employee.model';
import { EmployeesService } from './employees.service';


describe('EmployeesService', () => {
  let service: EmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesService);
  });

  it('should exist', () => {
    expect(service).toBeTruthy();
  });
});
