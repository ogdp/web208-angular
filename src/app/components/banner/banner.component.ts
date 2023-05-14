import { Component, ViewEncapsulation } from '@angular/core';
import { IBannerImg } from 'src/common/BannerImg';
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
  images: IBannerImg[] = [
    {
      id: '1',
      name: 'Img Banner',
      url: '../../../assets/images/h1.png',
      linkDetails: '#',
    },
    {
      id: '2',
      name: 'Img Banner',
      url: '../../../assets/images/h2.png',
      linkDetails: '#',
    },
    {
      id: '3',
      name: 'Img Banner',
      url: '../../../assets/images/h3.png',
      linkDetails: '#',
    },
    {
      id: '4',
      name: 'Img Banner',
      url: '../../../assets/images/h4.png',
      linkDetails: '#',
    },
  ];
  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
