import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/Categories/categories.service';
import { ICategory } from 'src/app/ViewModels/icategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoryList: ICategory[];
  constructor(private catSrv:CategoriesService) { }

  ngOnInit(): void {
    this.catSrv.getAllCategories().subscribe(
      (res)=>{
        this.categoryList=res
      },
      (err)=>{console.log(err)}
    )
  }

}
