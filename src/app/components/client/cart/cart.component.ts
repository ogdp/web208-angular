import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() receivedData: any;
  public listCart: any;
  ngOnChanges(changes: SimpleChanges) {
    this.listCart = this.receivedData.cart;
  }
  constructor(private cartSV: CartServiceService) {}
  removeCart(id: string) {
    this.cartSV.removeCart(id).subscribe(
      (response: any) => {
        this.listCart = this.listCart.filter((item: any) => item._id !== id);
      },
      (err: any) => {
        console.log(err);
      }
    );
    console.log(this.listCart);
  }
  formatMoney(amount: any = 0) {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
}
