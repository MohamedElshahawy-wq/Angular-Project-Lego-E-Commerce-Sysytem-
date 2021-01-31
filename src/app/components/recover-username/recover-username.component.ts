import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-username',
  templateUrl: './recover-username.component.html',
  styleUrls: ['./recover-username.component.scss']
})
export class RecoverUsernameComponent implements OnInit {

  forgoteemail:string;
  constructor() { }

  ngOnInit(): void {
  }

}
