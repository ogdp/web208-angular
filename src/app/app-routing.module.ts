import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/client/home/home.component';
import { ListProductComponent } from './pages/client/product/list-product/list-product.component';
import { DetailsProductComponent } from './pages/client/product/details-product/details-product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthComponent } from './pages/client/auth/auth.component';
import { AccountComponent } from './pages/client/account/account.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CheckoutSuccessComponent } from './pages/client/checkout-success/checkout-success.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { CheckoutAdminComponent } from './pages/admin/checkout-admin/checkout-admin.component';
import { ProductAdminComponent } from './pages/admin/product-admin/product-admin.component';
import { UserAdminComponent } from './pages/admin/user-admin/user-admin.component';
import { BannerAdminComponent } from './pages/admin/banner-admin/banner-admin.component';
import { FeedbackAdminComponent } from './pages/admin/feedback-admin/feedback-admin.component';
import { SettingAdminComponent } from './pages/admin/setting-admin/setting-admin.component';
import { CheckoutComponent } from './pages/client/checkout/checkout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/client/about-us/about-us.component';
import { PolicyComponent } from './pages/client/policy/policy.component';
import { CheckoutDetailComponent } from './pages/admin/checkout-admin/checkout-detail/checkout-detail.component';
import { AddProductComponent } from './pages/admin/product-admin/add-product/add-product.component';
import { UpdatedProductComponent } from './pages/admin/product-admin/updated-product/updated-product.component';
import { AddCategoryComponent } from './pages/admin/category/add-category/add-category.component';
import { AdminUpdateCategoryComponent } from './pages/admin/category/admin-update-category/admin-update-category.component';
import { BillComponent } from './pages/client/bill/bill.component';
import { AdminListCategoryComponent } from './pages/admin/category/admin-list-category/admin-list-category.component';
const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'checkouts', component: CheckoutAdminComponent },
      { path: 'checkouts/details/:id', component: CheckoutDetailComponent },
      { path: 'products', component: ProductAdminComponent },
      { path: 'products/add', component: AddProductComponent },
      { path: 'products/:id/edit', component: UpdatedProductComponent },
      {
        path: 'category',
        component: AdminListCategoryComponent,
        children: [
          { path: 'category', component: AdminListCategoryComponent },
          { path: 'add', component: AddCategoryComponent },
          { path: ':id/update', component: AdminUpdateCategoryComponent },
        ],
      },
      // { path: 'category/:id/update', component: AdminUpdateCategoryComponent },
      { path: 'users', component: UserAdminComponent },
      { path: 'banners', component: BannerAdminComponent },
      { path: 'feedbacks', component: FeedbackAdminComponent },
      { path: 'settings', component: SettingAdminComponent },
    ],
  },
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'product', component: ListProductComponent },
      { path: 'product/:id', component: DetailsProductComponent },
      { path: 'account', component: AccountComponent },
      { path: 'my-bill', component: BillComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'policy-terms', component: PolicyComponent },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      // Auth
      { path: 'auth', component: AuthComponent },

      // Checkouts
      { path: 'checkouts/:id/thank_you', component: CheckoutSuccessComponent },
    ],
  },
  { path: '**', component: NotFoundComponent }, // Thêm phần này vào cuối
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
