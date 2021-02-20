import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/firebaseServices/User/users.service';
import { NgAuthService } from 'src/app/Services/Authentication/ng-auth.service';

@Component({
  selector: 'app-edit-security',
  templateUrl: './edit-security.component.html',
  styleUrls: ['./edit-security.component.scss']
})
export class EditSecurityComponent implements OnInit {

  constructor(public router: Router, public ngAuthService: NgAuthService, public userService: UsersService) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['/EditAccount']);
  }

  closeBtn(){
    this.router.navigate(['/Home']);
  }

}
