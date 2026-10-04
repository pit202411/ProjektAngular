import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
  productId: number;
  productName: string;
  supplierId: number;
  categoryId: number;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  unitsOnOrder: number;
  reorderLevel: number;
  discontinued: boolean;
  categoryName: string | null;
  supplierName: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = '/api/Products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }
}