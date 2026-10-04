import { Component } from '@angular/core';
import { CitiesService, City } from '../../services/cities/cities.service';

@Component({
  selector: 'app-cities',
  imports: [],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {

  cities: City[] = [];

  constructor(private citiesService: CitiesService) {}

 getVoivodeship() {
  this.citiesService.getVoivodeships().subscribe({
    next: data => {
      console.log('ODPOWIEDŹ:', data);
      alert(JSON.stringify(data));
    },
    error: error => {
      console.error('BŁĄD:', error);
      alert(JSON.stringify(error));
    }
  });
}
}