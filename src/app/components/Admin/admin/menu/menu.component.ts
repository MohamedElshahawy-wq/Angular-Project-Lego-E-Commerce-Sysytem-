import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('mySidenav') sideNav: ElementRef;
  constructor() { }

  openNav() {
    this.sideNav.nativeElement.style.marginLeft = "0";
  }
  
  closeNav() {
    this.sideNav.nativeElement.style.marginLeft = "-250px";
  }
  ngOnInit(): void {
  }

}
