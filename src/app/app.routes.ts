import { Routes } from '@angular/router';
import { AllProducts } from './components/all-products/all-products';
import { ProductDetails } from './components/products-details/products-details';
import { AllPersons } from './components/all-persons/all-persons';
import { LoginComponent } from './components/login/login';

export const routes: Routes = [
  { path: '', component: AllProducts },
  { path: 'login', component: LoginComponent },
  { path: 'product/:id', component: ProductDetails },
  { path: 'persons', component: AllPersons },
];
