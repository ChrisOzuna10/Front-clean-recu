import { Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { NotFoundComponent } from '../../../shared/pages/not-found/not-found.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { CreateProductPageComponent } from './pages/create-product/create-product.component';
import { UpdateProductPageComponent } from './pages/update-product/update-product.component';
import { ViewProductsPageComponent } from './pages/view-products/view-products.component';
import { ViewOneProductComponent } from './components/view-one-product/view-one-product.component';

export const PRODUCT_ROUTES: Routes = [
  { path: '', component: DashboardPageComponent },
  { path: 'view', component: ViewProductsPageComponent },
  { path: 'view/:id', component: ViewOneProductComponent },
  { path: 'update/:id', component: UpdateProductPageComponent },
  { path: 'create', component: CreateProductPageComponent },
  { path: '**', component: NotFoundComponent },
];
