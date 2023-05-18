import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/product/list-product/list-product.component';
import { DetailsProductComponent } from './pages/product/details-product/details-product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AccountComponent } from './pages/account/account.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'auth', component: AuthComponent },
  // { path: 'product', component: ListProductComponent },
  // { path: 'product/:id', component: DetailsProductComponent },
  // { path: 'account', component: AccountComponent },
  // { path: '**', component: NotFoundComponent },

  // {
  //   path: '',
  //   component: ClientLayoutComponent,
  //   children: [
  //     { path: '', component: HomeComponent },
  //     { path: 'auth', component: AuthComponent },
  //     { path: 'product', component: ListProductComponent },
  //     { path: 'product/:id', component: DetailsProductComponent },
  //     { path: 'account', component: AccountComponent },
  //     { path: '**', component: NotFoundComponent },
  //   ],
  // },
  // {
  //   path: 'admin',
  //   component: AdminLayoutComponent,
  //   children: [
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //     { path: 'dashboard', component: DashboardComponent },
  //   ],
  // },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'auth', component: AuthComponent },
      { path: 'product', component: ListProductComponent },
      { path: 'product/:id', component: DetailsProductComponent },
      { path: 'account', component: AccountComponent },
      { path: '**', component: NotFoundComponent }, // Thêm phần này vào cuối
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
