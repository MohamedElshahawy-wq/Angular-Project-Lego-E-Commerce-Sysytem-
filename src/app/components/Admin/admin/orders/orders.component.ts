import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/Services/Customers/customers.service';
import { OrdersService } from 'src/app/Services/Orders/orders.service';
import { ICustomer } from 'src/app/ViewModels/ICustomer';
import { IOrder } from 'src/app/ViewModels/IOrder';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  customerList:ICustomer[];
  orderList: IOrder[];
  constructor(private orderSrv:OrdersService, private customerSrv:CustomersService) { }

  ngOnInit(): void {
    this.orderSrv.getAllOrders().subscribe(
      (res)=>{
        this.orderList=res
      },
      (err)=>{console.log(err)}
    )
    this.customerSrv.getAllCustomers().subscribe(
      (res)=>{
        this.customerList=res
      },
      (err)=>{console.log(err)}
    )
  }

  getCustomerNameByID(id:number) : string {
    let x = this.customerList?.find(element=> element.id == id);
    return `${x?.name}`
  }

}
