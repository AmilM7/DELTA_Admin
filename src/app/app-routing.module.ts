import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponentComponent} from "./login-component/login-component.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AddArticleComponent} from "./add-article/add-article.component";
import {DeleteArticleComponent} from "./delete-article/delete-article.component";
import {SucessfulRequestComponent} from "./sucessful-request/sucessful-request.component";
import { UpdateArticleComponent } from './update-article/update-article.component';
import { UpdateSpecificArticleComponent } from './update-specific-article/update-specific-article.component';

const routes: Routes = [
  {path: "", component: LoginComponentComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "addArticle", component: AddArticleComponent},
  {path: "deleteArticle", component: DeleteArticleComponent},
  {path: "sucess", component: SucessfulRequestComponent},
  {path: "updateArticle", component: UpdateArticleComponent},
  {path: "updateArticle/:id", component: UpdateSpecificArticleComponent},
]


@NgModule({
  imports: [
    [RouterModule.forRoot(routes, {useHash: true})]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
