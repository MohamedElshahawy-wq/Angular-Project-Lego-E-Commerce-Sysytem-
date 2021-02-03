import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private prdSrv:ProductsService, private catSrv:CategoriesService,
              private router:Router) { }

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

  goToProduct(id) {
    this.router.navigate(['/Product',id]);
  }

  deleteProduct(id) {
    this.prdSrv.deleteProduct(id).subscribe(
      (resp)=>{
        this.prdSrv.getAllProducts().subscribe(
          (res)=>{
            this.productList=res
          },
          (err)=>{console.log(err)}
        )
      },
      (err)=>{console.log(err)}
    )
  }
  
  goToAddProducts() {
    this.router.navigate(['Admin/AddProduct']);
  }

  getCategoryNameByID(id:number) : string {
    let x = this.categoryList?.find(element=> element.id == id);
    return `${x?.name}`
  }

}
