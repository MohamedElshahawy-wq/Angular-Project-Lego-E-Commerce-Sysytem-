import { Component, OnInit } from '@angular/core';
import { NgAuthService } from 'src/app/Services/Authentication/ng-auth.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  forgotppass:string;

  constructor(public ngAuthService: NgAuthService) { }

  resetPass(){
    this.ngAuthService.ForgotPassword(this.forgotppass);
  }

  ngOnInit(): void {
  }

}
