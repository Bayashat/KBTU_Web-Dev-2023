import { Component, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product; 

  constructor(){
    this.product = 	{
      id: 1,
      name: '',
      price: 0,
      description: '',
      rating: 0,
      url: "",
      image: ""
    }
  }
}
