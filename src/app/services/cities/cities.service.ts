import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface City {
  id: string;
  name: string;
  level: number;
  parentId: string | null;
}
interface VoivodeshipsResponse {
  results: City[];
}

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private apiUrl =
    'https://bdl.stat.gov.pl/api/v1/Units?level=2';

  constructor(private http: HttpClient) {}

  

  getVoivodeships() {
    return this.http.get<any>(this.apiUrl);
  }
}

