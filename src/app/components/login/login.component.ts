import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(public ngAuthService: NgAuthService, public router: Router/*private router:Router, private customerService: CustomersService, private cookie: CookieService*/) { }

  ngOnInit(): void {
    
  }

  loginCustomer(){

    this.ngAuthService.SignIn(this.loginEmail, this.loginPassword);
  }

  goBackBtn(){
    this.router.navigate(['/Home']);
  }

  closeBtn(){
    this.router.navigate(['/Home']);
  }

}
