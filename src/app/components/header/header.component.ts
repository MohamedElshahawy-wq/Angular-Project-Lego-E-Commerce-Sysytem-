import { Component, OnInit, ViewChild , ElementRef, AfterViewInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit {
  @ViewChild('mySidenav') mySidenav:  ElementRef;
  @ViewChild('langSelect') langSelect:  ElementRef;
  
  constructor(public translate: TranslateService) { 
    console.log("Language: "+translate.getBrowserLang());
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log("LANG. "+ this.langSelect.nativeElement.value);
    console.log("LANG. "+ this.translate.getDefaultLang());
  }
  openNav() {
    this.mySidenav.nativeElement.style.width = "350px";
  }
  closeNav() {
    this.mySidenav.nativeElement.style.width = "0";
  }

}
