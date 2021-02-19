import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/firebaseServices/Product/products.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.scss']
})
export class RecommendedProductsComponent implements OnInit {
  ProductList1 = [];
  ProductList2 = [];

  subscription: Subscription[] = [];

  AllProducts = [];
  constructor(private prodserv :ProductsService,
              private route:Router){ }
              
  ngOnInit(): void {
    this.subscription.push(this.prodserv.getProducts().subscribe(data => {
      this.AllProducts = data.map(e => {
        return {id: e.payload.doc.id, ...(e.payload.doc.data() as {})};
      })
      this.ProductList1=this.AllProducts.slice(0,4)
      this.ProductList2=this.AllProducts.slice(4,8)
    }))
  }

  ShowProduct(id:number){
    this.route.navigate(['Product',id]);
  }
}
