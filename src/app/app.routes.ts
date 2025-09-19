import { Routes } from '@angular/router';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { Home } from './feature/home/home';
import { About } from './feature/about/about';
import { Product } from './feature/product/product';

export const routes: Routes = [
  {
    path: '',
    component: AdminLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'products', component: Product }
    ]
  },
  { path: '**', redirectTo: '' }
];
