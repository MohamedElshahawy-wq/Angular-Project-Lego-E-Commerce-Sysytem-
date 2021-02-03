import { Observable } from 'rxjs';
import { IWishList } from 'src/app/ViewModels/iwish-list';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishListsService {
  constructor(private http:HttpClient) {}


getAllWishLists() : Observable<IWishList[]> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      // Authorization: 'my-auth-token'
    })
  };
  
  return this.http.get<IWishList[]>(`${environment.API_Link}/wishlists`, httpOptions);
}

//adding
addWishList(wishList: IWishList):Observable<any>
  {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,'Accept':' */*'
      //,'Authorization': 'my-auth-token'
        })};
        
    return this.http.post<any>(`${environment.API_Link}/wishlists`,wishList, httpOptions);
  }

  //get By ID
  getWishListByID(wID:number): Observable<IWishList>{
    return this.http.get<IWishList>(`${environment.API_Link}/wishlists/${wID}`);
  } 
}

