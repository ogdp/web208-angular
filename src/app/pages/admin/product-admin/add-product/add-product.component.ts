import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  isMatchSize: boolean = false;
  constructor(private titleService: Title) {
    this.titleService.setTitle('Thêm sản phẩm');
  }
  showSize() {
    this.isMatchSize = !this.isMatchSize;
  }
}
