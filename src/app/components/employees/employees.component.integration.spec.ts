import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeesComponent } from './employees.component';
import { EmployeesService } from '../../services/employees.service';

describe('EmployeesComponent Integration Tests', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;
  let service: EmployeesService ;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesComponent ],
      providers:[{
        provide: EmployeesService,
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    service = TestBed.get(EmployeesService);
  });

  it('employees data should be fetched using the service', ()=>{
    spyOn(service, 'getActiveEmployees').and.callThrough();

    fixture.detectChanges();
    expect(service.getActiveEmployees).toHaveBeenCalled();
  });
});
