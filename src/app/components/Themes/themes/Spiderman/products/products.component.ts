import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from '@angular/core';
import { ProductsService } from 'src/app/firebaseServices/Product/products.service';
import { CategoriesService } from 'src/app/firebaseServices/Category/categories.service';
import { ProductModel } from 'src/app/models/productModel';
import { data } from 'jquery';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // productList: IProduct[];

  @ViewChild('theFilters') filters: ElementRef;
  @ViewChild('allProducts') products: ElementRef;
  @ViewChild('theFiltersBtn') filterBtn: ElementRef;
  toggle: boolean = true;

  filteredList;
  categoryList = [];
  currentCategoryIndex = 0;
  subscription:Subscription[] = [];
  currentCategory;
  constructor(private productsService: ProductsService,
    private catService: CategoriesService) { }
  ngOnInit() {

    this.catService.getCategories().subscribe(data => {
      this.categoryList = data.map(e => {
        return {id: e.payload.doc.id, ...(e.payload.doc.data() as {})};
      })

      this.currentCategoryIndex = this.categoryList[0].id;

      this.subscription.push(this.catService.getSpcCategory(this.currentCategoryIndex).subscribe(data => {
        this.currentCategory = {id: data.payload.id, ...(data.payload.data() as {})};
        })
      )

      this.subscription.push(this.productsService.getProductsByCategoryID(this.currentCategoryIndex).subscribe(data => {
        this.filteredList = data.map(e => {
          return {id: e.payload.doc.id, ...(e.payload.doc.data() as {})};
        })
      }))
    })
  }

  changeCategory(id: any) {
    this.currentCategoryIndex = id;
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
    this.subscription.push(this.productsService.getProductsByCategoryID(this.currentCategoryIndex).subscribe(data => {
      this.filteredList = data.map(e => {
        return {id: e.payload.doc.id, ...(e.payload.doc.data() as {})};
      })
    }))
    this.subscription.push(this.catService.getSpcCategory(this.currentCategoryIndex).subscribe(data => {
      this.currentCategory = {id: data.payload.id, ...(data.payload.data() as {})};
      })
    )
  }

  ToggleFilters() {
    if (this.toggle) {
      this.filters.nativeElement.classList.remove('d-none');
      this.filterBtn.nativeElement.innerHTML = "Close";
      this.products.nativeElement.classList.add('d-none');
    } else {
      this.filters.nativeElement.classList.add('d-none');
      this.filterBtn.nativeElement.innerHTML = "Filter";
      this.products.nativeElement.classList.remove('d-none');
    }
    this.toggle = !this.toggle;
  }

  addToBag() {
    alert('Added to bag')
  }

  addToWishlist() {
    alert('Added to wishlist')
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth >= 992) {
      this.toggle = true;
      this.filters.nativeElement.classList.add('d-none');
      this.filterBtn.nativeElement.innerHTML = "Filter";
      this.products.nativeElement.classList.remove('d-none');
    }
  }

}
