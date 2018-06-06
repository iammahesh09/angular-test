
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { UserReviewComponent } from './users/user-details/reviews/review.component';
import { PageNotFoundComponent } from './page-not-found';
import { UserDetailsComponent } from './users/user-details/user.details.component';
import { UserCommentComponent } from './users/user-details/comments/user.comment.component';
import { LazyComponent } from './lazy.component';

const childRoutes: Routes = [
    { path: 'user-review', component: UserReviewComponent },
    { path: 'user-comment', component: UserCommentComponent }
]

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    { path: 'Users', component: UsersComponent },
    { path: 'Users/:login', component: UserDetailsComponent, children: childRoutes },
    { path: 'ProductsList', component: ProductListComponent },
    { path: 'lazy', component: LazyComponent, loadChildren:'./lazy.module#LazyModule' },
    //{ path: '**', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/' }
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
    UserReviewComponent,
    UserCommentComponent,
    LazyComponent,
    PageNotFoundComponent
]

