import { Component } from '@angular/core';
import { Employee } from '../../api';
//import { EmployeesService } from '../../services/employees/employees.service';
import { EmployeesService } from '../../api';
import { TableTypicalAbstractComponent,TableColumn } from '../table-typical-abstract/table-typical-abstract.component';

@Component({
  selector: 'app-employees',
  imports: [TableTypicalAbstractComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  employees: Employee[] = [];
  
  
    columns: TableColumn<Employee>[] = [
    {
      header: 'Nazwisko',
      field: 'lastName',
      sortable: true
    },
     {
      header: 'Imię',
      field: 'firstName',
      sortable: true
    }
    
  ];

   constructor(private employeesService: EmployeesService) {}

   /*  getEmployees() {
    this.employeesService.getEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (error) => {
        console.error('Błąd:', error);
      }
    });
  }
    */
 getEmployees(): void {


  this.employeesService.apiEmployeesGet().subscribe({
    next: (employees) => {
     
      this.employees = employees;
    },
    error: (error) => {
      
    }
  });
}
}


