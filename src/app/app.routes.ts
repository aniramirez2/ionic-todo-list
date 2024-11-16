import { Routes } from '@angular/router';
import { LayoutComponent } from './components/Layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // El layout principal
    children: [
      { path: 'home', loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },
      { path: 'categories', loadComponent: () => import('./pages/categories/categories.page').then(m => m.CategoriesPage) },
    ],
  },
  { path: '**', redirectTo: '/home' },
];
