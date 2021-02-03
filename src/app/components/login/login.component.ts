import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomersService } from 'src/app/Services/Customers/customers.service';
import { ICustomer } from 'src/app/ViewModels/ICustomer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  getCustomer: ICustomer|any;
  customerSubscription: Subscription;
  
  loginEmail: string;
  loginPassword: string;
  rememberMe: boolean;

  constructor(private router:Router, private customerService: CustomersService) { }

  ngOnInit(): void {
  }

  loginCustomer(){
    this.customerService.getAllCustomers().subscribe((res)=>{
      this.getCustomer = res;
      for(let i=1;i<res.length;i++)
      {
        if(this.getCustomer[i].email === this.loginEmail && this.getCustomer[i].password === this.loginPassword)
        {
          this.router.navigate(['/Home']);
        }
        else{
          alert("Your username and/or password do not match our records.");
        }
    }

    },(err)=>{
      console.log(err);
    });
  }

}
