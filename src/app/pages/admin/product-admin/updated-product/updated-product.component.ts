import { Component } from '@angular/core';

@Component({
  selector: 'app-updated-product',
  templateUrl: './updated-product.component.html',
  styleUrls: ['./updated-product.component.css'],
})
export class UpdatedProductComponent {
  isMatchSize: boolean = false;
  showSize() {
    this.isMatchSize = !this.isMatchSize;
  }
}
