import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { UserReviewComponent } from './users/user-details/reviews/review.component';
import { PageNotFoundComponent } from './page-not-found';
import { UserDetailsComponent } from './users/user-details/user.details.component';
import { UserCommentComponent } from './users/user-details/comments/user.comment.component';
import { LazyComponent } from './lazy.component';
import { FormsComponent } from './forms/forms.component';
import { AnglarFormComponent } from './forms/anglar-form/anglar-form.component';
import { ReativeFormComponent } from './forms/reative-form/reative.component';
import { LoginComponent } from './login/login.component';

const childRoutes: Routes = [
    { path: 'user-review', component: UserReviewComponent },
    { path: 'user-comment', component: UserCommentComponent }
]

const childForm:Routes = [
    {path:'angularForm', component:AnglarFormComponent},
    {path:'reativeForm', component:ReativeFormComponent}
]

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    { path: 'Users', component: UsersComponent },
    { path: 'Users/:login', component: UserDetailsComponent, children: childRoutes },
    { path: 'ProductsList', component: ProductListComponent },
    { path: 'lazy', component: LazyComponent, loadChildren: './lazy.module#LazyModule' },
    { path: 'forms', component: FormsComponent, children:childForm },
    {path:'login',component:LoginComponent},
    { path: '**', component: PageNotFoundComponent },
    //{ path: '**', redirectTo: '/' }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
