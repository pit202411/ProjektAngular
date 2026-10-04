import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http: HttpClient) {}

  getMessage() {
    return this.http.get<{ message: string }>(
      'http://localhost:8080/api/hello'
    );
  }
}