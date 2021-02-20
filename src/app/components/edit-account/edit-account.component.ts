import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/firebaseServices/User/users.service';
import { NgAuthService } from 'src/app/Services/Authentication/ng-auth.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {

  username:string;

  constructor(public router: Router, public ngAuthService: NgAuthService, public userService: UsersService) { }

  ngOnInit(): void {
  }

  closeEdit(){
    this.router.navigate(['/Home']);
  }

  setUser(){
    const id = this.ngAuthService.userLoggedID;
    console.log(id);
    this.userService.getSpcUser(id).subscribe((res)=>{
      console.log(res);
    })

  }

  logout(){
    this.ngAuthService.SignOut();
  }

  security(){
    this.router.navigate(['/Security']);
  }

  EditInformation(){
    this.router.navigate(['/EditInformation']);
  }

  editUsername(){
    console.log("console log")
  }


}
