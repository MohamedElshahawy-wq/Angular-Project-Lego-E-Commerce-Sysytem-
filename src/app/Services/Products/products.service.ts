import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpcNetConnectOpts } from 'net';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/ViewModels/IProduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts() : Observable<IProduct[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // Authorization: 'my-auth-token'
      })
    };
    
    return this.http.get<IProduct[]>(`${environment.API_Link}/products`, httpOptions);
  }
  getProductByID(pID:number): Observable<IProduct>{
    return this.http.get<IProduct>(`${environment.API_Link}/products/${pID}`);
  } 
}
