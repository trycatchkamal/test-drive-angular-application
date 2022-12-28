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
    let result:Employee[]=[];

    employees.forEach(item=> {
      if(item.active ===true){
        result.push(
        {
          displayName: item.name,
          contact:item.mobile,
          email: item.email,
          location: item.location,
          id: item.number,
          bankName: item.bank_name,
        });
      }
    })

    return result;
  }
}
