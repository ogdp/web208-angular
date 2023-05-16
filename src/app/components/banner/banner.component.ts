import { Component, ViewEncapsulation } from '@angular/core';
import { dataBanner } from 'src/app/data/mockData';
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent {
  images = dataBanner;
  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
