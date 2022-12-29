import { TestBed } from '@angular/core/testing';
import { EmployeesRepository } from './employees.repository';
import { Observable, of, from, pipe } from 'rxjs';
import { RawEmployee } from '../models/raw/raw-employee.model';

describe('EmployeesRepository', () => {
  let repository: EmployeesRepository;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    repository = TestBed.inject(EmployeesRepository);
  });

  it('Should exist', () => {
    expect(repository).toBeTruthy();
  });

  it('should call underlying store for the data', (done: DoneFn) => {
    const response = new Response(JSON.stringify({}));
    spyOn(window,'fetch').and.resolveTo(response);

    repository.getRawEmployees().subscribe(()=>{
      expect(window.fetch).toHaveBeenCalled();
      done();
    })
  });
});
