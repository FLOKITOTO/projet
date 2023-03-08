import { Routes } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { AboutComponent } from '../main/about/about.component';
import { ContactComponent } from '../main/contact/contact.component';
import { HomeComponent } from '../main/home/home.component';
import { MainComponent } from '../main/main.component';
import { ContentAllProductsComponent } from './components/content-all-products/content-all-products.component';
import { ContentOneProductComponent } from './components/content-one-product/content-one-product.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact', component: AboutComponent },
      { path: 'about', component: ContactComponent },
      { path: 'products', component: ContentAllProductsComponent },
      { path: 'products/:id', component: ContentOneProductComponent },
    ],
  },
  { path: '**', component: ErrorComponent },
];
