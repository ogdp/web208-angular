import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  data:any
 ngOnInit(): void {
     this.data = JSON.parse(localStorage.getItem('user')!)
     console.log(this.data.user)
 }
}
