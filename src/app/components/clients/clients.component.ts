import { Component } from '@angular/core';
import { NoProductComponent } from '../no-product/no-product.component';
import {  Client } from '../../services/clients/clients.service';
import { ClientsService } from '../../api';
import { TableColumn, TableTypicalAbstractComponent } from '../table-typical-abstract/table-typical-abstract.component';
import { Customer } from '../../api';

@Component({
  selector: 'app-clients',
  imports: [NoProductComponent,TableTypicalAbstractComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  clients: Customer[] = [];

  columns: TableColumn<Customer>[] = [
  {
    header: 'Nazwa',
    field: 'companyName',
    sortable: true
  },
  {
    header: 'Kontakt',
    field: 'contactName'
  },
  {
    header: 'Stanowisko',
    field: 'contactTitle'
  },
  {
    header: 'Adres',
    field: 'address'
  },
  {
    header: 'Miasto',
    field: 'city',
    sortable: true
  },
  {
    header: 'Region',
    field: 'region'
  },
  {
    header: 'Kraj',
    field: 'country'
  },
  {
    header: 'Telefon',
    field: 'phone'
  },
  {
    header: 'Fax',
    field: 'fax'
  },
  {
    header: 'Liczba zamówień',
    value: customer =>
      customer.orders?.length
        ? String(customer.orders.length)
        : '0'
  }
];

  constructor(private clientService: ClientsService) {}

  getClients() {
    this.clientService.apiClientsGet().subscribe({
      next: (customers) => {
        this.clients = customers;
      },
      error: (error) => {
        console.error('Błąd:', error);
      }
    });
  }
}