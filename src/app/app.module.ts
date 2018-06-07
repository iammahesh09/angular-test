
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';

//Custom Module
import { SharedModule } from './shared/SharedModule';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './AppRouting';
import { PageNotFoundComponent } from './page-not-found';
import { LazyComponent } from './lazy.component';
import { UserCommentComponent } from './users/user-details/comments/user.comment.component';
import { UserReviewComponent } from './users/user-details/reviews/review.component';
import { UserDetailsComponent } from './users/user-details/user.details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FormsComponent } from './forms/forms.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UsersComponent,
    ProductListComponent,
    UserDetailsComponent,
    UserReviewComponent,
    UserCommentComponent,
    LazyComponent,
    PageNotFoundComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
