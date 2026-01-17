import { Routes } from '@angular/router';
import { AllProducts } from './components/all-products/all-products';
import { ProductDetails } from './components/products-details/products-details';
import { AllPersons } from './components/all-persons/all-persons';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';

export const routes: Routes = [
  { path: '', component: AllProducts },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product/:id', component: ProductDetails },
  { path: 'persons', component: AllPersons },
];
