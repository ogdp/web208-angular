import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FStore';
  scrollToTop(){
    const button = document.querySelector('.btn');
    button?.addEventListener("click", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      }); 
    });
  }
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
