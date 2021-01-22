import { Component, OnInit, ViewChild , ElementRef} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('mySidenav') mySidenav:  ElementRef;
  constructor() { }
  ngOnInit(): void {
  }
  openNav() {
    this.mySidenav.nativeElement.style.width = "350px";
  }
  closeNav() {
    this.mySidenav.nativeElement.style.width = "0";
  }

}
