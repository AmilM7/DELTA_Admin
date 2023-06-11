import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponentComponent} from "./login-component/login-component.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AddArticleComponent} from "./add-article/add-article.component";
import {DeleteArticleComponent} from "./delete-article/delete-article.component";
import {SucessfulRequestComponent} from "./sucessful-request/sucessful-request.component";

const routes: Routes = [
  {path: "", component: LoginComponentComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "addArticle", component: AddArticleComponent},
  {path: "deleteArticle", component: DeleteArticleComponent},
  {path: "sucess", component: SucessfulRequestComponent},
]


@NgModule({
  imports: [
    [RouterModule.forRoot(routes, {useHash: true})]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
