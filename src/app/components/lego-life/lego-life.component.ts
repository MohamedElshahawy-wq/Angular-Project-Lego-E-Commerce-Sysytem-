import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lego-life',
  templateUrl: './lego-life.component.html',
  styleUrls: ['./lego-life.component.scss']
})
export class LegoLifeComponent implements OnInit {

  constructor(public translate: TranslateService) { 
    //Done
    console.log("LegoLifeComponent(translate.currentLang): "+translate.currentLang);
  }

  ngOnInit(): void {
  }
}
