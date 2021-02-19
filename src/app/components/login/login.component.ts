import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgAuthService } from 'src/app/Services/Authentication/ng-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  customerSubscription: Subscription;
  
  loginEmail: string;
  loginPassword: string;
  rememberMe: boolean;


  constructor(public ngAuthService: NgAuthService/*private router:Router, private customerService: CustomersService, private cookie: CookieService*/) { }

  ngOnInit(): void {
    
  }

  loginCustomer(){

    this.ngAuthService.SignIn(this.loginEmail, this.loginPassword);

    /*this.customerService.getAllCustomers().subscribe((res)=>{
      this.getCustomer = res;
      for(let i=1;i<res.length;i++)
      {
        if(this.getCustomer[i].email === this.loginEmail && this.getCustomer[i].password === this.loginPassword)
        {
          //set cookie
          //this.cookie.set(this.getCustomer[i].email, this.getCustomer[i].id);
        
          this.router.navigate(['/Home']);
        }
        else{
          alert("Your username and/or password do not match our records.");
        }
    }

    /*this.cookieTrial = this.cookie.get('mohamed@gmail.com');
    console.log(this.cookieTrial);

    },(err)=>{
      console.log(err);
    });*/
  }

}
