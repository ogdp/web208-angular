import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Client
import { HeaderComponent } from './components/client/header/header.component';
import { FooterComponent } from './components/client/footer/footer.component';
import { HomeComponent } from './pages/client/home/home.component';
import { AuthComponent } from './pages/client/auth/auth.component';
import { ListProductComponent } from './pages/client/product/list-product/list-product.component';
import { DetailsProductComponent } from './pages/client/product/details-product/details-product.component';
import { CardComponent } from './components/client/card/card.component';
import { BannerComponent } from './components/client/banner/banner.component';
import { SwiperModule } from 'swiper/angular';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsNewComponent } from './components/client/products-new/products-new.component';
import { CartComponent } from './components/client/cart/cart.component';
import { CollectionsComponent } from './components/client/collections/collections.component';
import { ProductsFamousComponent } from './components/client/products-famous/products-famous.component';
import { AccountComponent } from './pages/client/account/account.component';
import { ContactAboutUsComponent } from './components/client/contact-about-us/contact-about-us.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { CheckoutSuccessComponent } from './pages/client/checkout-success/checkout-success.component';

// Blank
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
// Admin
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NavAdminComponent } from './components/admin/nav-admin/nav-admin.component';
import { HeaderAdminComponent } from './components/admin/header-admin/header-admin.component';
import { CheckoutAdminComponent } from './pages/admin/checkout-admin/checkout-admin.component';
import { ProductAdminComponent } from './pages/admin/product-admin/product-admin.component';
import { UserAdminComponent } from './pages/admin/user-admin/user-admin.component';
import { FeedbackAdminComponent } from './pages/admin/feedback-admin/feedback-admin.component';
import { BannerAdminComponent } from './pages/admin/banner-admin/banner-admin.component';
import { SettingAdminComponent } from './pages/admin/setting-admin/setting-admin.component';
import { CheckoutComponent } from './pages/client/checkout/checkout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/client/about-us/about-us.component';
import { LoaderComponent } from './components/loader/loader.component';

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
    AdminLayoutComponent,
    ClientLayoutComponent,
    DashboardComponent,
    CheckoutSuccessComponent,
    BlankLayoutComponent,
    NavAdminComponent,
    HeaderAdminComponent,
    CheckoutAdminComponent,
    ProductAdminComponent,
    UserAdminComponent,
    FeedbackAdminComponent,
    BannerAdminComponent,
    SettingAdminComponent,
    CheckoutComponent,
    ContactComponent,
    AboutUsComponent,
    LoaderComponent,
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
