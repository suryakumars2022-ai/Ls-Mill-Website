import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'LS Mills Limited | Premium Textile Manufacturing — Theni, Tamil Nadu'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | LS Mills Limited — Heritage & Textile Excellence'
  },
  {
    path: 'manufacturing',
    loadComponent: () => import('./pages/manufacturing/manufacturing.component').then(m => m.ManufacturingComponent),
    title: 'Manufacturing Capabilities | LS Mills Limited — Spinning, Weaving & Labs'
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
    title: 'Product Catalogue | LS Mills Limited — Yarns, Woven Fabrics & Home Textiles'
  },
  {
    path: 'sustainability',
    loadComponent: () => import('./pages/sustainability/sustainability.component').then(m => m.SustainabilityComponent),
    title: 'Sustainability & Responsibility | LS Mills Limited'
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers.component').then(m => m.CareersComponent),
    title: 'Careers | LS Mills Limited — Make Something That Lasts'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Commercial Desk | LS Mills Limited — Theni, South India'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
