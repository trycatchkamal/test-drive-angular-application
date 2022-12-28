import { TestBed } from '@angular/core/testing';
import { Employee } from '../models/employee.model';
import { EmployeesService } from './employees.service';
import { EmployeesRepository } from '../repositories/employees.repository';
import { Observable, of } from 'rxjs';
import { RawEmployee } from '../models/raw/raw-employee.model';

describe('EmployeesService', () => {
  let service: EmployeesService;
  let repository: EmployeesRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesService);
    repository = TestBed.get(EmployeesRepository);
  });

  it('should exist', () => {
    expect(service).toBeTruthy();
  });

  it('should return employees asynchronously', (done: DoneFn) => {
    const rawEmployeesMock = [
      { number: '1',active:false, name: "John", bank_name: 'Irelandbank',location:'India',email:'john@john.com',mobile:'11123' },
      { number: '2', active:true, name: "Doe", bank_name: 'Dutchbank',location:'US',email:'doe@doe.com',mobile:'54523'},
    ];

    const employeeNames: any = { active1: 'Doe', active2: 'Will', inactive: '00093102156410' };

    spyOn(repository,'getRawEmployees').and.returnValue(of(rawEmployeesMock));

    service.getActiveEmployees().subscribe({
      next: (employees: Employee[]) => {
        expect(employees.length).toBe(1);

        const employeeWithName = (name: string) => employees.find(employee => employee.displayName === name);

        employees.forEach(employee => {
          expect(employee.id).toBeTruthy();
          expect(employee.displayName).toBeTruthy();
          expect(employee.location).toBeTruthy();
          expect(employee.bankName).toBeTruthy();
          expect(employee.contact).toBeTruthy();
        });

        expect(employeeWithName(employeeNames.active1)).toBeTruthy();
        expect(employeeWithName(employeeNames.inactive)).toBeUndefined();

        done();
      }
    });
  });
});

