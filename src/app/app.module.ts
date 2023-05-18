import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ListProductComponent } from './pages/product/list-product/list-product.component';
import { DetailsProductComponent } from './pages/product/details-product/details-product.component';
import { CardComponent } from './components/product/card/card.component';
import { BannerComponent } from './components/banner/banner.component';
import { SwiperModule } from 'swiper/angular';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsNewComponent } from './components/products-new/products-new.component';
import { CartComponent } from './components/cart/cart.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { ProductsFamousComponent } from './components/products-famous/products-famous.component';
import { AccountComponent } from './pages/account/account.component';
import { ContactAboutUsComponent } from './components/contact-about-us/contact-about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AuthComponent,
    ListProductComponent,
    DetailsProductComponent,
    CardComponent,
    BannerComponent,
    NotFoundComponent,
    ProductsNewComponent,
    CartComponent,
    CollectionsComponent,
    ProductsFamousComponent,
    AccountComponent,
    ContactAboutUsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
