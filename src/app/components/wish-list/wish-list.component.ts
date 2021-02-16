import { Component, OnInit } from '@angular/core';

import { WishListsService } from 'src/app/Services/WishLists/wish-lists.service';

import { IWishList } from 'src/app/ViewModels/iwish-list';
import { ActivatedRoute, Router } from '@angular/router';
import {  ParamMap } from '@angular/router';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { IProduct } from 'src/app/ViewModels/IProduct';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wsh:IWishList;
  wshID:number=0
  WishList:IWishList[];
  ProductList:IProduct[]=[];
  
  // newWishList:IWishList;

  constructor(private wishSrv:WishListsService ,private activatedRoute:ActivatedRoute 
              ,private prdSrv:ProductsService) { 
    // this.newWishList={
    //   id:0, userID:0,productsIDs:[]
    //  }
  }

  ngOnInit(): void {
    this.wishSrv.getWishListByID(2).subscribe(
      (res)=>{
        console.log(res)
        this.wsh=res
        console.log(this.wsh)
       
        for(var i=0;i<this.wsh.productsIDs.length;i++)
        {
          // console.log(this.wsh.productsIDs[i])
          this.prdSrv.getProductByID(this.wsh.productsIDs[i]).subscribe(
            (Xres)=>{
              this.ProductList.push(Xres)
              // console.log(typeof(Xres))
              console.log(Xres)
            }
          )
        }
        console.log(this.ProductList)
      },
      (err)=>{console.log(err)}
    )

    // ------------------------





    // -----------------------


 this.activatedRoute.paramMap.subscribe((params)=>{
      let wshIDParam:string|null = params.get('wID');
      this.wshID= (wshIDParam)? parseInt(wshIDParam) : 0;

    
      
      this.wishSrv.getWishListByID(this.wshID);
    })
  
    
    // insertWishList()
    // {
    //   this.wishSrv.addWishList(this.newWishList)
    //   .subscribe(
        
    //     Response => {this.router.navigateByUrl('/wishlists'); },
    //     err => {console.log(err); }
    //   );
    // }

  }
   DeleteWishList(id) {
    this.wishSrv.DeleteWishList(id).subscribe(
      (resx)=>{
       
        this.wishSrv.getAllWishLists().subscribe(
          (res)=>{
            this.WishList=res
          },
          (err)=>{console.log(err)}
        )
      },
      (err)=>{console.log(err)}
    )
  }

}
