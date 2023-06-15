import { Component, OnInit } from '@angular/core';
import {AdminService} from "../services/article.service";
import {HttpClient} from "@angular/common/http";
import {article} from "../models/article";
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-update-specific-article',
  templateUrl: './update-specific-article.component.html',
  styleUrls: ['./update-specific-article.component.css']
})
export class UpdateSpecificArticleComponent implements OnInit {

  articles: Observable<article[]>;
  id: number;

  article: article = {
    id: 0,
    heading: '',
    description: '',
    content: '',
    date: '',
    picture: '',
    trending: false,
    category: ''
  };

  constructor(private http: HttpClient,
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute,
    ) { this.articles = this.adminService.getArticles(), this.id = this.route.snapshot.params['id'];}

  ngOnInit() {

  }

  submitForm() {
    this.adminService.updateArticle(this.article, this.id).subscribe(value => {
      this.router.navigate(['/sucess']);
    });
    console.log(this.article)
  }
     
}
