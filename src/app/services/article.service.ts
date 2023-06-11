import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {article} from "../models/article";

@Injectable()
export class AdminService {

  private readonly baseUrl:string  =  "https://ap-proj.herokuapp.com/articles";

  constructor(private http:HttpClient) {
  }

  public create(Article: article): Observable<article> {
    return this.http.post<article>(`${this.baseUrl}`, Article);
  }

  public getArticles():Observable<article[]> {
    return this.http.get<article[]>(this.baseUrl);
  }

  public deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }

}
