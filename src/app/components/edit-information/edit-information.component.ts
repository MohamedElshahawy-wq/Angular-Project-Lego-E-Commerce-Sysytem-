import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/firebaseServices/User/users.service';
import { NgAuthService } from 'src/app/Services/Authentication/ng-auth.service';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.scss']
})
export class EditInformationComponent implements OnInit {

  constructor(public router: Router, public ngAuthService : NgAuthService, public userService : UsersService) { }

  ngOnInit(): void {
  }

  goBackBtn(){
    this.router.navigate(['/EditAccount']);
  }

  closeBtn(){
    this.router.navigate(['/Home']);
  }

}
