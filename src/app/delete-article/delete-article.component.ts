import { Component, OnInit } from '@angular/core';
import {AdminService} from "../services/article.service";
import {HttpClient} from "@angular/common/http";
import {article} from "../models/article";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {

  articles: Observable<article[]>;

  constructor(private http: HttpClient,
              private adminService: AdminService,
              private router: Router) {
    this.articles = this.adminService.getArticles()
  }

  ngOnInit(): void {
    console.log("result" + this.articles);
  }

  deleteArticle(articleId: number): void {
    this.adminService.deleteArticle(articleId).subscribe(value => {
      console.log("Success");
      this.router.navigate(['/sucess']);
    });
  }

}
