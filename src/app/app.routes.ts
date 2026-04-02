import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { ProductDetails } from './pages/products/product-details/product-details';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';
import { AddProduct } from './pages/add-product/add-product';
import { Register } from './pages/register/register';
import { EditStory } from './pages/edit-story/edit-story';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: 'products', component: Products},
    {path: 'products/:slug', component: ProductDetails},
    {path: 'stories', component: Stories},
    {path: 'add-story', component: AddStory},
    {path: 'add-product', component: AddProduct},
    {path: 'edit/:id', component: EditStory},
    {path: 'register', component: Register},
    {path: 'login', component: Login},

];
