import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomersService } from 'src/app/Services/Customers/customers.service';
import { ICustomer } from 'src/app/ViewModels/ICustomer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newCustomer: ICustomer|any;
  customerSubscription: Subscription;

  email:string;
  password:string;
  month: number;
  day:number;
  year:number;
  termsandconditionsCheck:boolean;

  constructor(private router:Router, private customerService: CustomersService) {
  }

  addnewCustomer(){
    this.newCustomer = {email:this.email, password:this.password, birthday:{month:this.month, day:this.day, year:this.year},termsandconditionsCheck:this.termsandconditionsCheck}
    this.customerService.addCustomer(this.newCustomer).subscribe((response)=>{
      console.log("Customer Added!");
      console.log(this.newCustomer);
      console.log("Response" + response);
      this.router.navigate(['/Home']);
    },
    (err)=>{
      console.log(err);
    })
  }

  

  ngOnInit(): void {
  }

}
