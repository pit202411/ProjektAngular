import { Routes } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { CitiesComponent } from './components/cities/cities.component';
import { ClientsComponent } from './components/clients/clients.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { CategoriesComponent } from './components/categories/categories.component';

export const routes: Routes =  [
  { path: '', component: HelloComponent,
    
   },
  {
    path: 'cities',
    component: CitiesComponent
  },
   {
    path: 'clients',
    component: ClientsComponent
  }
  ,
   {
    path: 'employees',
    component: EmployeesComponent
  }
   ,
   {
    path: 'categories',
    component: CategoriesComponent
  }
  
  
];
