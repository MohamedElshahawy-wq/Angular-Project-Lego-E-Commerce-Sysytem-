import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/Services/Customers/customers.service';
import { ICustomer } from 'src/app/ViewModels/ICustomer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customerList: ICustomer[];
  constructor(private customerSrv:CustomersService) { }

  ngOnInit(): void {
    this.customerSrv.getAllCustomers().subscribe(
      (res)=>{
        this.customerList=res
      },
      (err)=>{console.log(err)}
    )
  }

  deleteCustomer(id) {
    this.customerSrv.deleteCustomer(id).subscribe(
      (resp)=>{
        this.customerSrv.getAllCustomers().subscribe(
          (res)=>{
            this.customerList=res
          },
          (err)=>{console.log(err)}
        )
      },
      (err)=>{console.log(err)}
    )
  }

}
