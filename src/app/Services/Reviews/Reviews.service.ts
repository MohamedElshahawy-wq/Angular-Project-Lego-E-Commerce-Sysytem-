import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IReveiw } from 'src/app/ViewModels/iReveiw';
@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  constructor(private http: HttpClient) { }
  getReviewsByProductId(pid: number): Observable<IReveiw[]> {
    return this.http.get<IReveiw[]>(`${environment.API_Link}/reviews?productId=${pid}`);
  }
  addReview(rev: IReveiw): Observable<any> {
    return this.http.post<any>(`${environment.API_Link}/reviews`, rev);
  }
}
