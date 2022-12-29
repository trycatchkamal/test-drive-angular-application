import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Employee } from '../models/employee.model';
import { EmployeesRepository } from '../repositories/employees.repository';
import { RawEmployee } from '../models/raw/raw-employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private repository:EmployeesRepository) {}

  getActiveEmployees():Observable<Employee[]>{
    return this.repository.getRawEmployees().pipe(
      map(this.toListOfActiveEmployees)
    );
  }

  private toListOfActiveEmployees = (employees: RawEmployee[]): Employee[] => {
    return employees
    .filter(employee=>employee.active==true)
    .map(employee => {
      return {
      displayName: employee.name,
      contact:employee.mobile,
      email:employee.email,
      location:employee.location,
      id: employee.number,
      bankName: employee.bank_name,
      }
    });
  }
}
