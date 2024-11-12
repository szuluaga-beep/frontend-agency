import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'product/:id', component: ProductComponent },
];
