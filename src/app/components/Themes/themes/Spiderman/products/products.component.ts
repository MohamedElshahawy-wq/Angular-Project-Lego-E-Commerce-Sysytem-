import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from '@angular/core';
import { ProductsService } from 'src/app/firebaseServices/Product/products.service';
import { ProductModel } from 'src/app/models/productModel';

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

  productList;
  constructor(private productsService: ProductsService) { }
  ngOnInit() {
    console.log("In OnInit");

    this.productsService.getProducts().subscribe(data => {
      this.productList = data.map(e => {
        console.log(e.payload.doc.id, "   :e.payload.doc.id");
        console.log(e.payload.doc.data(), "   :e.payload.doc.data()");

        return e.payload.doc.data();
        // {
        //   id: e.payload.doc.id,
        //   stock: e.payload.doc.data().stock,
        //   rating: e.payload.doc.data().rating,
        //   image: e.payload.doc.data().image,
        //   categoryID: e.payload.doc.data().categoryID,
        //   price: e.payload.doc.data().price,
        //   description: e.payload.doc.data().description,
        //   name: e.payload.doc.data().name,
        //   available: e.payload.doc.data().available
        // } as unknown as ProductModel;
      }
      )
    });
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
