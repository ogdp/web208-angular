import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FStore';

  // displayButton(){
  //   const button = document.querySelector('.btn');
  //   window.addEventListener('scroll', () => {
  //     console.log(window.scrollY);
  //     if (window.scrollY > 100) {
  //       button.style.display = "block";
  //     } else {
  //       button.style.display = "none";
  //     }
  //   });
  // }
}
