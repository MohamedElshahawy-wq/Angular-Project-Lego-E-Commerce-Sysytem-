import { Component, OnInit, ViewChild , ElementRef} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('mySidenav') mySidenav:  ElementRef;
  
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }
  openNav() {
    this.mySidenav.nativeElement.style.width = "350px";
  }
  closeNav() {
    this.mySidenav.nativeElement.style.width = "0";
  }

}
