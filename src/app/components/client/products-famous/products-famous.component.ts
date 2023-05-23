import { Component } from '@angular/core';


@Component({
  selector: 'app-products-famous',
  templateUrl: './products-famous.component.html',
  styleUrls: ['./products-famous.component.css']
})
export class ProductsFamousComponent {
  products = [
    {
      id: 1,
      name: 'Product 1',
      price: 2000,
      image: 'https://demo.themefisher.com/adrian/images/shop/products/222.jpg',
      description: 'hek dhjdh hehe',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 2000,
      image: 'https://demo.themefisher.com/adrian/images/shop/products/222.jpg',
      description: 'hek dhjdh hehe',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 2000,
      image: 'https://demo.themefisher.com/adrian/images/shop/products/222.jpg',
      description: 'hek dhjdh hehe',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 2000,
      image: 'https://demo.themefisher.com/adrian/images/shop/products/222.jpg',
      description: 'hek dhjdh hehe',
    },
    
  ];
}
