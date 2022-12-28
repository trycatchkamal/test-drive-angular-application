import { Injectable } from '@angular/core';
import { RawEmployee } from '../models/raw/raw-employee.model';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesRepository {

  constructor() { }

  public getRawEmployees(): Observable<RawEmployee[]> {
    return of();
  }
}
