import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-no-product',
  imports: [],
  templateUrl: './no-product.component.html',
  styleUrl: './no-product.component.css'
})
export class NoProductComponent {
 @Input() message: string = '';
}
