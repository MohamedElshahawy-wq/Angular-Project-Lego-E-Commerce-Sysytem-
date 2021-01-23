import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/ViewModels/icategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  getAllCategories() : Observable<ICategory[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // Authorization: 'my-auth-token'
      })
    };
    
    return this.http.get<ICategory[]>(`${environment.API_Link}/categories`, httpOptions);
  }
}
