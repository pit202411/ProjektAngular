import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../api';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

   private apiUrl = '/api/Employees';

  constructor(private http: HttpClient) { }
   getEmployees() {
        
        return this.http.get<Employee[]>(this.apiUrl);
      }
}
