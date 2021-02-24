import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isAdmin: boolean = false;

  user: User;

  cookieTrial:string;

  constructor(public ngAuthService: NgAuthService, public router: Router /*,private router:Router, private customerService: CustomersService,  /*private cookie: CookieService*/) {
  }

  addnewCustomer(){
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
      termsandconditionsCheck: this.termsandconditionsCheck,
      isAdmin: this.isAdmin
    }

    
    this.ngAuthService.SignUp(this.user);
  }

  goBackBtn(){
    this.router.navigate(['/EditAccount']);
  }

  closeBtn(){
    this.router.navigate(['/Home']);
  }

  

  ngOnInit(): void {
  }

}
