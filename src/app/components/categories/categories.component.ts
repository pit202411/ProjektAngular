import { Component } from '@angular/core';
import { CategoriesService,Category } from '../../api';
import { TableColumn, TableTypicalAbstractComponent } from '../table-typical-abstract/table-typical-abstract.component';

@Component({
  selector: 'app-categories',
  imports: [TableTypicalAbstractComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
    categories: Category[] = [];
     columns: TableColumn<Category>[] = [
      {
        header: 'Nazwa',
        field: 'categoryName',
        sortable: true
      }
    ];
    

     constructor(private categoriesService:  CategoriesService) {}
    
getCategories() {
  this.categoriesService.apiCategoriesGet().subscribe({
   next: (categories) => {
        this.categories= categories;
      },
      error: (error) => {
        console.error('Błąd:', error);
      }
    });
  }
}