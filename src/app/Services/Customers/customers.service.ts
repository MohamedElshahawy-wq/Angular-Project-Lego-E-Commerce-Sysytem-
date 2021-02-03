import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from 'src/app/ViewModels/ICustomer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient) { }

  getAllCustomers() : Observable<ICustomer[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // Authorization: 'my-auth-token'
      })
    };
    
    return this.http.get<ICustomer[]>(`${environment.API_Link}/users`, httpOptions);
  }
// Add Customer
addCustomer(cust: ICustomer):Observable<any>
  {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,'Accept':' */*'
      //,'Authorization': 'my-auth-token'
        })};
        
    return this.http.post<any>(`${environment.API_Link}/users`,cust, httpOptions);
  }
  deleteCustomer(cust: number):Observable<any>
  {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,'Accept':' */*'
      //,'Authorization': 'my-auth-token'
        })};
        
    return this.http.delete<any>(`${environment.API_Link}/users/${cust}`, httpOptions);
  }
}
