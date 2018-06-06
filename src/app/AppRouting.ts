import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found';
import { UserDetailsComponent } from './users/user-details/user.details.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    { path: 'Users', component: UsersComponent },
    { path: 'Users/:login', component: UserDetailsComponent },
    { path: 'ProductsList', component: ProductListComponent },
    //{ path: '**', component: PageNotFoundComponent },
    { path: '**',redirectTo:'/'},

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
    ProductListComponent,
    UserDetailsComponent,
    PageNotFoundComponent
]

