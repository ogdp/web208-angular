import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/product/list-product/list-product.component';
import { DetailsProductComponent } from './pages/product/details-product/details-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ListProductComponent },
  { path: 'product/:id', component: DetailsProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
