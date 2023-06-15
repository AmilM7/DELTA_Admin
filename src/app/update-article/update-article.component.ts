import { Component, OnInit } from '@angular/core';
import {AdminService} from "../services/article.service";
import {HttpClient} from "@angular/common/http";
import {article} from "../models/article";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  articles: Observable<article[]>;

  constructor(private http: HttpClient,
    private adminService: AdminService,
    private router: Router) { this.articles = this.adminService.getArticles()}

  ngOnInit(): void {
    console.log(this.articles);
  }

  selectArticle(articleId: number): void {
    this.router.navigate(['/updateArticle', articleId]);
  }

}
