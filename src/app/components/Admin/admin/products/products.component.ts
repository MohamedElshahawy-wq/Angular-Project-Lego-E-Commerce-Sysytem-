import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/Categories/categories.service';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList:IProduct[];
  categoryList: ICategory[];
  constructor(private prdSrv:ProductsService, private catSrv:CategoriesService) { }

  ngOnInit(): void {
    this.prdSrv.getAllProducts().subscribe(
      (res)=>{
        this.productList=res
      },
      (err)=>{console.log(err)}
    )
    this.catSrv.getAllCategories().subscribe(
      (res)=>{
        this.categoryList=res
      },
      (err)=>{console.log(err)}
    )
  }

  getCategoryNameByID(id:number) : string {
    let x = this.categoryList?.find(element=> element.id == id);
    return `${x?.name}`
  }

}
