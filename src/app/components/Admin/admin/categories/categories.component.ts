import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/Categories/categories.service';
import { ICategory } from 'src/app/ViewModels/icategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoryList: ICategory[];
  constructor(private catSrv:CategoriesService, private router:Router) { }

  ngOnInit(): void {
    this.catSrv.getAllCategories().subscribe(
      (res)=>{
        this.categoryList=res
      },
      (err)=>{console.log(err)}
    )
  }

  goToAddCategory() {
    this.router.navigate(['Admin/AddCategory']);
  }

  deleteCategory(id) {
    this.catSrv.deleteCategory(id).subscribe(
      (resp)=>{
        this.catSrv.getAllCategories().subscribe(
          (res)=>{
            this.categoryList=res
          },
          (err)=>{console.log(err)}
        )
      },
      (err)=>{console.log(err)}
    )
  }

}
