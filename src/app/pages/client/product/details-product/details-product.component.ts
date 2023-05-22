import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/data/mockData';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css'],
})
export class DetailsProductComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  id: any = '';
  products = products;
  product: any = {};
  order_product: any = {};
  inputValuee: number = 1;
  activeSize: string = this.order_product.size;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.product = this.products.filter(
        (item: any) => item._id == this.id
      )[0];
      this.order_product = {
        product_id: this.product._id,
        name: this.product.name,
        price: this.product.price,
        size: this.product?.size[0],
        description: this.product.description,
        image: this.product.image,
        note: this.product.note,
        quantity: this.inputValuee,
        user: 'notfound',
      };
    });
  }

  formatMoney(amount: any) {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
  isEmptyObject(obj: any) {
    return Object.keys(obj).length === 0;
  }

  inputValue() {
    if (this.inputValuee < 1) this.inputValuee = 1;
    if (this.inputValuee > 50) {
      this.inputValuee = 1;
      alert('Liên hệ quản trị viên để mua giá sỉ');
    }
    // console.log(this.inputValuee);
  }
  _setValueQuantity() {
    if (this.inputValuee <= 1) {
      return;
    }
    this.inputValuee -= 1;
    this.order_product.quantity = this.inputValuee;
  }
  setValueQuantity() {
    if (this.inputValuee >= 50) {
      return alert('Liên hệ quản trị viên để mua giá sỉ');
    }
    this.inputValuee += 1;
    this.order_product.quantity = this.inputValuee;
  }
  // SIZE
  onHanddleSize(value: any) {
    if (this.product.size.length > 0) {
      const check = this.product.size.filter(
        (item: any) => item == value.target.id
      );
      if (check.length <= 0) return console.log();
      this.order_product.size = String(value.target.id);
      this.activeSize = value.target.id;
    }
  }
  isLoadding: boolean = false;
  onHanddleOrder() {
    (async () => {
      this.isLoadding = true;
      const { data }: any = await axios.get(
        'https://api.ipify.org/?format=json'
      );
      const userAgent = navigator.userAgent;
      const deviceDetail = {
        ip: data.ip,
        userAgent: String(userAgent),
      };
      this.isLoadding = false;
      this.order_product.deviceDetail = deviceDetail;
      console.log('Đã thêm sản phẩm : >> ', this.order_product);
    })();
  }
}
