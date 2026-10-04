import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { ButtonComponent } from './components/button/button.component';
import { HelloService } from './services/hello/hello.service';
import { ProductsService, Product } from './services/product/product.service';






@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

 
}