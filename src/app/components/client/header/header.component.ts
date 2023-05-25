import { Component, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // constructor(private titleService: Title) {
  //   this.titleService.setTitle('Sản phẩm');
  // }
  isShowMenu: boolean = false;
  menuMobile(event1: any) {
    this.isShowMenu = !this.isShowMenu;
  }

  classToggled:boolean = false;

  showCart() {
    const cart = document.getElementById("cart");
    cart?.classList.toggle("hidden")
    console.log("aaa")
  }
}
