import { Component } from '@angular/core';

import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];



  share_wtsp() {
    window.alert(window.open('https://web.whatsapp.com://send?text=This is whatsapp sharing example using button'));
  }

  share_telegram() {
    window.alert(window.open('https://telegram.me/share/url?url=<URL>&text=<TEXT>'));
  }

}