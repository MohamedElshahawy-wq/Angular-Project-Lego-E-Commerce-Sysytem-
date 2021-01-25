import { ProductsService } from 'src/app/Services/Products/products.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriesService } from 'src/app/Services/Categories/categories.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/IProduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  subscribtion: Subscription | null = null;
  CategoryList: ICategory[] = [];
  Avail: boolean=false;
  @ViewChild('SelectCat') SelectCat: ElementRef = new ElementRef('input');
  @ViewChild('Rating') Rating: ElementRef = new ElementRef('input');
  @ViewChild('Available') Available: ElementRef = new ElementRef('input');
  @ViewChild('description') description: ElementRef = new ElementRef('input');
  @ViewChild('Stock') Stock: ElementRef = new ElementRef('input');
  @ViewChild('Image') Image: ElementRef = new ElementRef('input');
  @ViewChild('Price') Price: ElementRef = new ElementRef('input');
  @ViewChild('Name') Name: ElementRef = new ElementRef('input');
  newProduct: IProduct;
  constructor(private router: Router, private catService: CategoriesService, private prdService: ProductsService) {
  }

  ngOnInit(): void {
    this.subscribtion = this.catService.getAllCategories().subscribe(
      (response) => {
        console.log("in subscribe");
        this.CategoryList = response;
      },
      (err) => { console.log(err) }
    );
  }

  ngAfterViewInit(): void {
    this.SelectCat.nativeElement.style.fontStyle = 'italic';
    this.SelectCat.nativeElement.style.fontWeight = 'bold';
    this.SelectCat.nativeElement.style.backgroundColor = 'lightgray';
  }
  addPRODUCT() {
    console.log("add:"+this.Available.nativeElement.value);
    
    if (this.Available.nativeElement.value = "on")
      this.Avail = true;
    else
      this.Avail = false;
    this.newProduct = {
      name: this.Name.nativeElement.value,
      description: this.description.nativeElement.value,
      price: parseInt(this.Price.nativeElement.value),
      stock: parseInt(this.Stock.nativeElement.value),
      image: this.Image.nativeElement.value,
      available: this.Avail,
      rating: parseInt(this.Rating.nativeElement.value),
      categoryID: parseInt(this.SelectCat.nativeElement.value)
    };
    this.prdService.addProduct(this.newProduct).subscribe(
      (res) => {
        console.log("res" + this.newProduct.categoryID);
        // this.router.navigate([`/Admain/${this.newProduct.CategoryID}`]);//AdproID
        alert("Product added....");
      },
      (err) => { console.log(err) }
    );
  }

}
