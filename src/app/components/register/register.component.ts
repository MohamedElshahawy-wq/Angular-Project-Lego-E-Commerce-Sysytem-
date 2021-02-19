import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgAuthService, User } from 'src/app/Services/Authentication/ng-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /*getCustomer: ICustomer|any;*/
  customerSubscription: Subscription;

  email?:string;
  password?:string;
  month: number;
  day:number;
  year:number;
  termsandconditionsCheck:boolean;

  user: User;

  cookieTrial:string;

  constructor(public ngAuthService: NgAuthService /*,private router:Router, private customerService: CustomersService,  /*private cookie: CookieService*/) {
  }

  addnewCustomer(){
    console.log(this.email);
    console.log(this.password);

    this.user={
      uid: Math.random().toString(),
      email: this.email,
      password: this.password,
      birthday:{
        month: this.month,
        day:this.day,
        year: this.year
      },
      termsandconditionsCheck: this.termsandconditionsCheck
    }

    
    this.ngAuthService.SignUp(this.user);
    /*this.newCustomer = {email:this.email, password:this.password, birthday:{month:this.month, day:this.day, year:this.year},termsandconditionsCheck:this.termsandconditionsCheck}
    this.customerService.addCustomer(this.newCustomer).subscribe((response)=>{
      console.log("Customer Added!");
      console.log(this.newCustomer);
      console.log("Response" + response);
      //this.setCustomerCookie();
      this.router.navigate(['/Home']);
    },
    (err)=>{
      console.log(err);
    })
  }

  /*setCustomerCookie(){
    this.customerService.getAllCustomers().subscribe((res)=>{
      this.getCustomer = res;
      for(let i=1;i<res.length;i++)
      {
        if(this.getCustomer[i].email === this.email && this.getCustomer[i].password === this.password)
        {
          //set cookie
          this.cookie.set(this.getCustomer[i].email, this.getCustomer[i].id);

        }
    }

    },(err)=>{
      console.log(err);
    });*/
  }

  

  ngOnInit(): void {
  }

}
