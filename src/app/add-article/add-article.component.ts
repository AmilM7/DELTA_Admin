import { Component, OnInit } from '@angular/core';
import {article} from "../models/article";
import {HttpClient} from "@angular/common/http";
import {AdminService} from "../services/article.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent{

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
              private router: Router) {}

  submitForm() {
   this.adminService.create(this.article).subscribe(value => {
     this.router.navigate(['/sucess']);
   });
  }

}


