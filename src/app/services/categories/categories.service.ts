import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';      
import { Category } from '../../api';


//Potrzebne są HTTP ^ oraz Model pobierania z bazy

@Injectable({
  providedIn: 'root'
})

//Typowa struktura^

export class CategoriesService {

   private apiUrl = '/api/Categories';

  constructor(private http: HttpClient) { }
   getCategories() {
        
        return this.http.get<Category[]>(this.apiUrl);
      }
}