import { TestBed } from '@angular/core/testing';
import { EmployeesRepository } from './employees.repository';

describe('EmployeesRepository', () => {
  let repository: EmployeesRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    repository = TestBed.inject(EmployeesRepository);
  });

  it('Should exist', () => {
    expect(repository).toBeTruthy();
  });
});
