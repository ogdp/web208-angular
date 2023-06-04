import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/data/mockData';
import { ProductService } from 'src/app/services/client/products/product.service';
import { CartServiceService } from 'src/app/service/cart/cart-service.service';
@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css'],
})
export class DetailsProductComponent implements OnInit {
  id: any = '';
  product: any = {};
  products: any;
  order_product: any = {};
  inputValuee: number = 1;
  activeSize: string = this.order_product.size;
  notification: number = 0;
  isLoadding: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private getProduct: ProductService,
    private cartSV: CartServiceService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.getProduct.getProduct(this.id).subscribe((data: any) => {
      this.product = data.product;
      this.order_product = {
        product_id: this.product._id,
        name: this.product.name,
        price: this.product.price,
        size: this.product?.size[0],
        image: this.product.image,
        quantity: this.inputValuee,
        user: 'notfound',
      };
    });
    this.getProduct.getProductsNew().subscribe((data: any) => {
      this.products = data.product.docs;
    });
  }
  ngOnInit() {}
  formatMoney(amount: any = 0) {
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
  // Submit
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
      const encode64 = btoa(JSON.stringify(deviceDetail));
      this.order_product.device = encode64;
      // Gửi lên server
      this.cartSV.addToCart(this.order_product).subscribe(
        (response: any) => {
          this.isLoadding = false;
          this.notification = 1;
          setTimeout(() => {
            this.notification = 0;
          }, 1200);
          console.log(response);
        },
        (err: any) => {
          this.isLoadding = false;
          console.log(err);
        }
      );
      // console.log('Đã thêm sản phẩm : >> ', this.order_product);
    })();
  }
}
