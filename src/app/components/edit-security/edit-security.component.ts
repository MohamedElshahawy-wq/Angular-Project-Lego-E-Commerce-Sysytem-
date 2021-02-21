import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/firebaseServices/User/users.service';
import { UserModel } from 'src/app/models/usersModel';
import { NgAuthService } from 'src/app/Services/Authentication/ng-auth.service';

@Component({
  selector: 'app-edit-security',
  templateUrl: './edit-security.component.html',
  styleUrls: ['./edit-security.component.scss']
})
export class EditSecurityComponent implements OnInit {

  password: string;
  obj: any;
  editedUser: UserModel;

  constructor(public router: Router, public ngAuthService: NgAuthService, public userService: UsersService) { }

  ngOnInit(): void {
    const id = this.ngAuthService.userLoggedID;
    console.log(id);
    this.userService.getSpcUser(id).subscribe((data)=>{
      //this.user = {uid: data.payload.id, ...(data.payload.data() as {})};
      console.log(data.payload.data());
      this.obj = data.payload.data();
    })
  }

  goBack(){
    this.router.navigate(['/EditAccount']);
  }

  closeBtn(){
    this.router.navigate(['/Home']);
  }

  save(){
    this.editedUser = {
      uid: this.obj.uid,
      email: this.obj.email,
      password: this.password,
      displayName: this.obj.displayName,
      birthday: this.obj.birthday,
      termsandconditionsCheck: this.obj.termsandconditionsCheck
    }

    this.userService.updateUser(this.editedUser);

  }

  deleteBtn(){
    this.userService.deleteUser(this.obj.uid);
    this.router.navigate(['/Home']);

  }

}
