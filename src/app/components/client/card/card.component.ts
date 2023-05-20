import { Component } from '@angular/core';
import { products } from 'src/app/data/mockData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  products = products;
}
