import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from "@angular/forms";
import { AddArticleComponent } from './add-article/add-article.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';
import {AdminService} from "./services/article.service";
import { SucessfulRequestComponent } from './sucessful-request/sucessful-request.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    DashboardComponent,
    AddArticleComponent,
    DeleteArticleComponent,
    SucessfulRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AdminService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
