import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './products/product-list/product/product.component';
import { PageNotFoundComponent } from './page-not-found';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    { path: 'Users', component: UsersComponent },
    { path: 'Products', component: ProductComponent },
    { path: '**', component: PageNotFoundComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const AppRoutingCompnent = [
    HomeComponent,
    AboutComponent,
    UsersComponent,
    ProductComponent,
    PageNotFoundComponent
]

