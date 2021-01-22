import { Component, OnInit } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit(): void {
  }
  list1() {

    if (document.getElementById("aboutuslist2").style.display == 'none') {
      document.getElementById("aboutuslist2").style.display = 'block'
    } else {
      document.getElementById("aboutuslist2").style.display = 'none'
    }
  }
  list2() {

    if (document.getElementById("SUPPORTlist2").style.display == 'none') {
      document.getElementById("SUPPORTlist2").style.display = 'block'
    } else {
      document.getElementById("SUPPORTlist2").style.display = 'none'
    }
  }
  list3() {

    if (document.getElementById("ATTRACTIONSlist2").style.display == 'none') {
      document.getElementById("ATTRACTIONSlist2").style.display = 'block'
    } else {
      document.getElementById("ATTRACTIONSlist2").style.display = 'none'
    }
  }
  list4() {

    if (document.getElementById("MOREFROMUSlist2").style.display == 'none') {
      document.getElementById("MOREFROMUSlist2").style.display = 'block'
    } else {
      document.getElementById("MOREFROMUSlist2").style.display = 'none'
    }
  }

}
