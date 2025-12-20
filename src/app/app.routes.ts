import { Routes } from '@angular/router';
import { AllProducts } from './pages/all-products/all-products';
import { ProductDetails } from './pages/products-details/products-details';

export const routes: Routes = [
  { path: '', component: AllProducts },
  { path: 'product/:id', component: ProductDetails }
];
