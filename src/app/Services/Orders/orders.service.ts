import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/ViewModels/IOrder';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getAllOrders() : Observable<IOrder[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // Authorization: 'my-auth-token'
      })
    };
    
    return this.http.get<IOrder[]>(`${environment.API_Link}/orders`, httpOptions);
  }
// Add Order
addOrder(order: IOrder):Observable<any>
  {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,'Accept':' */*'
      //,'Authorization': 'my-auth-token'
        })};
        
    return this.http.post<any>(`${environment.API_Link}/orders`,order, httpOptions);
  }

  deleteOrder(ord: number):Observable<any>
  {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,'Accept':' */*'
      //,'Authorization': 'my-auth-token'
        })};
        
    return this.http.delete<any>(`${environment.API_Link}/orders/${ord}`, httpOptions);
  }
}
