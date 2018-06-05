
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';

//Custom Module
import { SharedModule } from './shared/SharedModule';

import { AppComponent } from './app.component';
import { AppRoutingModule, AppRoutingCompnent } from './AppRouting';



@NgModule({
  declarations: [
    AppComponent,
    AppRoutingCompnent
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
