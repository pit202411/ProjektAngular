import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export interface Client{
  customerId: string;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: string;
  city: string;
  region: string | null;
  postalCode: string;
  country: string;
  phone: string;
  fax: string;
  orderId: any[];
  freight: any[];
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private apiUrl = '/api/Clients';
  constructor(private http: HttpClient) { }
    getClients() {
      
      return this.http.get<Client[]>(this.apiUrl);
    }
}
