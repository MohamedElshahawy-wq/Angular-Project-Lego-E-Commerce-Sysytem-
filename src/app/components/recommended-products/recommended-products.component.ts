import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { IProduct } from 'src/app/ViewModels/IProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.scss']
})
export class RecommendedProductsComponent implements OnInit {
  ProductList1: IProduct[] = [];
  ProductList2: IProduct[] = [];

  AllProducts:IProduct[] = [];
  constructor(private prodserv :ProductsService,
              private route:Router){ }
  ngOnInit(): void {
    this.prodserv.getAllProducts().subscribe((res)=>{
      this.AllProducts=res;
      this.ProductList1=this.AllProducts.slice(0,4)
      this.ProductList2=this.AllProducts.slice(4,8)

    })

  }
  ShowProduct(id:number){
    this.route.navigate(['Product',id]);
  }
  



}
