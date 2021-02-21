import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/firebaseServices/User/users.service';
import { UserModel } from 'src/app/models/usersModel';
import { NgAuthService } from 'src/app/Services/Authentication/ng-auth.service';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.scss']
})
export class EditInformationComponent implements OnInit {

  username:string;
  email: string;
  editmonth: number;
  editday: number;
  edityear:number;
  obj:any;
  editedUser: UserModel;

  constructor(public router: Router, public ngAuthService : NgAuthService, public userService : UsersService) { }

  ngOnInit(): void {
    const id = this.ngAuthService.userLoggedID;
    console.log(id);
    this.userService.getSpcUser(id).subscribe((data)=>{
      //this.user = {uid: data.payload.id, ...(data.payload.data() as {})};
      console.log(data.payload.data());
      this.obj = data.payload.data();
      this.username = this.obj.displayName;
      this.email = this.obj.email;
      this.editmonth = this.obj.birthday.month;
      this.editday = this.obj.birthday.day;
      this.edityear = this.obj.birthday.year;
    })
  }

  goBackBtn(){
    this.router.navigate(['/EditAccount']);
  }

  closeBtn(){
    this.router.navigate(['/Home']);
  }

  save(){
      console.log("Helloooooo");
      this.editedUser = {
        uid: this.obj.uid,
        email: this.email,
        password: this.obj.password,
        displayName: this.obj.displayName,
        birthday: this.obj.birthday,
        termsandconditionsCheck: this.obj.termsandconditionsCheck
      }
  
      this.userService.updateUser(this.editedUser);
  
  
    
  }

}
