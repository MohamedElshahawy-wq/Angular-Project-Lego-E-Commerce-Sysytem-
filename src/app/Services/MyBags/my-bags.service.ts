import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMyBag } from 'src/app/ViewModels/imy-bag';


@Injectable({
  providedIn: 'root'
})
export class MyBagsService {

  constructor(private http:HttpClient) { }

  getAllMyBags() : Observable<IMyBag[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // Authorization: 'my-auth-token'
      })
    };
    
    return this.http.get<IMyBag[]>(`${environment.API_Link}/mybags`, httpOptions);
  }

  //adding
addMyBag(mybag: IMyBag):Observable<any>
{
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
    //,'Accept':' */*'
    //,'Authorization': 'my-auth-token'
      })};
      
  return this.http.post<any>(`${environment.API_Link}/mybags`,mybag, httpOptions);
}

 //get By ID
 getMyBagByID(bID:number): Observable<IMyBag>{
  return this.http.get<IMyBag>(`${environment.API_Link}/bags/${bID}`);
} 
}
