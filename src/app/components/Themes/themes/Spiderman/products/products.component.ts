import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from '@angular/core';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { IProduct } from 'src/app/ViewModels/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList: IProduct[];

  @ViewChild('theFilters') filters: ElementRef;
  @ViewChild('allProducts') products: ElementRef;
  @ViewChild('theFiltersBtn') filterBtn: ElementRef;
  toggle: boolean = true;

  constructor(private prdSrv: ProductsService) {}

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
    console.log(event.target.innerWidth);
    if (event.target.innerWidth >= 992) {
      this.toggle = true;
      this.filters.nativeElement.classList.add('d-none');
      this.filterBtn.nativeElement.innerHTML = "Filter";
      this.products.nativeElement.classList.remove('d-none');
    }
  }

  ngOnInit(): void {
    this.prdSrv.getAllProducts().subscribe( 
      (res) => {
        this.productList = res
        console.log(this.productList)
      },
      (err) => {console.log(err)}
    )
  }

}
