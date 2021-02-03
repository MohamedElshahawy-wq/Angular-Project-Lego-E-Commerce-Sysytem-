import { Component, OnInit } from '@angular/core';

import { MyBagsService } from 'src/app/Services/MyBags/my-bags.service';

import { IMyBag} from 'src/app/ViewModels/imy-bag';
import { ActivatedRoute, Router } from '@angular/router';
import {  ParamMap } from '@angular/router';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { IProduct } from 'src/app/ViewModels/IProduct';

@Component({
  selector: 'app-my-bbag',
  templateUrl: './my-bbag.component.html',
  styleUrls: ['./my-bbag.component.scss']
})
export class MyBBagComponent implements OnInit {

  MyBag:IMyBag[];
MyOneBag:IMyBag;
ProductList:IProduct[]=[];
  constructor(private bagSrv:MyBagsService ,private activatedRoute:ActivatedRoute ,private prdSrv:ProductsService) { }

  ngOnInit(): void {

    this.bagSrv.getMyBagByID(1).subscribe(
      (res)=>{
        this.MyOneBag=res
        for(var i=0;i<this.MyOneBag.productsIDs.length;i++)
        {
          // console.log(this.wsh.productsIDs[i])
          this.prdSrv.getProductByID(this.MyOneBag.productsIDs[i]).subscribe(
            (Xres)=>{
              console.log(Xres)
              this.ProductList.push(Xres)
             
            }
          )
        }
      },
      (err)=>{console.log(err)}
    )
  }

}
