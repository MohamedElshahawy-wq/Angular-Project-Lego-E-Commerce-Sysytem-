import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { IProduct } from 'src/app/ViewModels/IProduct';
import { ActivatedRoute, Router } from '@angular/router';
import {  ParamMap } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product:IProduct;
  prdID :number =0;

  constructor(private productser:ProductsService,
              private activatedroute:ActivatedRoute ) { }
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params : ParamMap)=> {  
      let PID : string|null =params.get('PID');
      this.prdID=PID? parseInt(PID):0;
      this.productser.getProductByID(this.prdID).subscribe((res)=>{
        this.product=res;
      })
    });
  }
  
  
}
