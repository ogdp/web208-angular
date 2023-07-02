import { Component } from '@angular/core';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css'],
})
export class ClientLayoutComponent {
  scrollToTop() {
    const button = document.querySelector('.btn');
    button?.addEventListener('click', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }
}
