import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { ProductDetails } from './pages/products/product-details/product-details';
import { Stories } from './pages/stories/stories';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: 'products', component: Products},
    {path: 'products/:slug', component: ProductDetails},
    {path: 'stories', component: Stories},
];
