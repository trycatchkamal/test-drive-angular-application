import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';
import { EmployeesRepository } from '../repositories/employees.repository';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private repository:EmployeesRepository) {

  }

  getActiveEmployees():Observable<Employee[]>{
    return of();
  }
}
