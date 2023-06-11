import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  addArticle() {
    this.router.navigate(['/addArticle']);
  }

  updateArticle() {
    // Implement your logic for updating an article here -- Irfan
  }

  deleteArticle() {
    this.router.navigate(['/deleteArticle']);
  }

}
