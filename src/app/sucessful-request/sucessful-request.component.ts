import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sucessful-request',
  templateUrl: './sucessful-request.component.html',
  styleUrls: ['./sucessful-request.component.css']
})
export class SucessfulRequestComponent{

  constructor(private router: Router) {}

  redirectToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

}
