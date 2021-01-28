import { ICategory } from './../../../../ViewModels/icategory';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriesService } from 'src/app/Services/Categories/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  newCategory: ICategory;
  subscribtion: Subscription | null = null;
  @ViewChild('TotalOrdered') TotalOrdered: ElementRef = new ElementRef('input');
  @ViewChild('Name') Name: ElementRef = new ElementRef('input');
  constructor(private router: Router, private catService: CategoriesService) {
  }

  ngOnInit(): void {
    
  }
  addCategory() {
    this.newCategory = {
      name: this.Name.nativeElement.value,
      totalOrdered: parseInt(this.TotalOrdered.nativeElement.value)
    };
    this.catService.addCategory(this.newCategory).subscribe(
      (res) => {
        // this.router.navigate([`/Admain/${this.newProduct.CategoryID}`]);//AdproID
        alert("Category added....");
      },
      (err) => { console.log(err) }
    );
  }

}

