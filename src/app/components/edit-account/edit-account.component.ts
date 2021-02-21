import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/firebaseServices/User/users.service';
import { UserModel } from 'src/app/models/usersModel';
import { NgAuthService, User } from 'src/app/Services/Authentication/ng-auth.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {

  username:string;
  user: User;
  obj : any;

  editedUser: UserModel;

  constructor(public router: Router, public ngAuthService: NgAuthService, public userService: UsersService) { }

  ngOnInit(): void {
    const id = this.ngAuthService.userLoggedID;
    console.log(id);
    this.userService.getSpcUser(id).subscribe((data)=>{
      //this.user = {uid: data.payload.id, ...(data.payload.data() as {})};
      console.log(data.payload.data());
      this.obj = data.payload.data();
      this.username = this.obj.displayName;
    })
  }

  closeEdit(){
    this.router.navigate(['/Home']);
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

  save(){
    this.editedUser = {
      uid: this.obj.uid,
      email: this.obj.email,
      password: this.obj.password,
      displayName: this.username,
      birthday: this.obj.birthday,
      termsandconditionsCheck: this.obj.termsandconditionsCheck
    }

    this.userService.updateUser(this.editedUser);


  }



}
