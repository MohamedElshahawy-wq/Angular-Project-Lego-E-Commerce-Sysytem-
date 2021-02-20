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
  displayName : string = 'Lego User';
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
      displayName: this.displayName,
      birthday:{
        month: this.month,
        day:this.day,
        year: this.year
      },
      termsandconditionsCheck: this.termsandconditionsCheck
    }

    
    this.ngAuthService.SignUp(this.user);
  }

  

  ngOnInit(): void {
  }

}
