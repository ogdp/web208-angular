import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css'],
})
export class NavAdminComponent {
  currentUrl: string = '';
  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    // console.log(this.currentUrl);
  }
  hoverBgButton: boolean = true;
  navigate(url: string) {
    this.router.navigate([url]);
    this.currentUrl = url;
    // console.log(this.currentUrl);
  }
}
