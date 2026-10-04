import { Component } from '@angular/core';

import { ButtonComponent } from '../button/button.component';
import { Product } from '../../api';

import { ProductsService } from '../../api';
import { NoProductComponent } from '../no-product/no-product.component';
import { TableTypicalAbstractComponent,TableColumn } from '../table-typical-abstract/table-typical-abstract.component';


@Component({
  selector: 'app-hello',
  imports: [NoProductComponent,TableTypicalAbstractComponent],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {

  products: Product[] = [];


  
  
    columns: TableColumn<Product>[] = [
    {
      header: 'productName',
      field: 'productName',
      sortable: true
    },
    {
      header: 'supplierId',
      field: 'supplierId'
    },
    {
      header: 'categoryId',
      field: 'categoryId'
    },
    {
      header: 'quantityPerUnit',
      field: 'quantityPerUnit'
    },
    {
      header: 'unitPrice',
      field: 'unitPrice',
      sortable: true
    },
    {
      header: 'unitsInStock',
      field: 'unitsInStock'
    },
    {
      header: 'unitsOnOrder',
      field: 'unitsOnOrder'
    },
    {
      header: 'reorderLevel',
      field: 'reorderLevel'
    },
    {
      header: 'Fax',
      field: 'discontinued'
    }
    
  ];
  
    constructor(private productsService: ProductsService) {}
  
    getProducts() {
      this.productsService.apiProductsGet().subscribe({
        next: products => {
          this.products = products;
        },
        error: error => {
          console.error('Błąd:', error);
        }
      });
    }
    
  }

