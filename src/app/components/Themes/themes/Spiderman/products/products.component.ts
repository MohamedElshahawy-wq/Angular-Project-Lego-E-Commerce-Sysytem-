import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { ProductsService } from 'src/app/firebaseServices/Product/products.service';
import { CategoriesService } from 'src/app/firebaseServices/Category/categories.service';
import { ProductModel } from 'src/app/models/productModel';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { BagsService } from 'src/app/firebaseServices/MyBag/bags.service';
import { WishlistService } from 'src/app/firebaseServices/WishList/wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  // productList: IProduct[];

  @ViewChild('theFilters') filters: ElementRef;
  @ViewChild('allProducts') products: ElementRef;
  @ViewChild('theFiltersBtn') filterBtn: ElementRef;
  toggle: boolean = true;

  filteredList = [];
  categoryList = [];
  currentCategoryIndex = 0;
  subscription: Subscription[] = [];
  currentCategory;
  userID: any;
  bag: any;
  wishlist: any;
  productsInBag: any;
  productsInWishlist: any;
  constructor(private productsService: ProductsService,
    private catService: CategoriesService, private bagSrv: BagsService,
    private wishSrv: WishlistService, private toastr: ToastrService) { }

  ngOnInit() {

    this.userID = JSON.parse(localStorage.getItem('user')).uid;
    this.subscription.push(this.bagSrv.getSpcMyBag(this.userID).subscribe(data => {
      this.bag = { id: data.payload.id, ...(data.payload.data() as {}) };

      this.productsInBag = this.bag.productsIDs;
    })
    );

    this.subscription.push(this.wishSrv.getSpcWishlist(this.userID).subscribe(data => {
      this.wishlist = { id: data.payload.id, ...(data.payload.data() as {}) };

      this.productsInWishlist = this.wishlist.productsIDs;
    })
    );

    this.catService.getCategories().subscribe(data => {
      this.categoryList = data.map(e => {
        return { id: e.payload.doc.id, ...(e.payload.doc.data() as {}) };
      })

      this.currentCategoryIndex = this.categoryList[0].id;

      this.subscription.push(this.catService.getSpcCategory(this.currentCategoryIndex).subscribe(data => {
        this.currentCategory = { id: data.payload.id, ...(data.payload.data() as {}) };
      })
      )

      this.subscription.push(this.productsService.getProductsByCategoryID(this.currentCategoryIndex).subscribe(data => {
        this.filteredList = data.map(e => {
          return { id: e.payload.doc.id, ...(e.payload.doc.data() as {}) };
        })
      }))
    })
  }

  ngOnDestroy(): void {
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
  }

  changeCategory(id: any) {
    this.currentCategoryIndex = id;
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
    this.subscription.push(this.productsService.getProductsByCategoryID(this.currentCategoryIndex).subscribe(data => {
      this.filteredList = data.map(e => {
        return { id: e.payload.doc.id, ...(e.payload.doc.data() as {}) };
      })
    }))
    this.subscription.push(this.catService.getSpcCategory(this.currentCategoryIndex).subscribe(data => {
      this.currentCategory = { id: data.payload.id, ...(data.payload.data() as {}) };
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

  addToBag(prdID: any) {
    let theProducts = [...this.productsInBag];
    let prd;

    var result = theProducts.find(obj => {
      return obj.id === prdID
    })

    if (result) {
      const index = theProducts.indexOf(result);
      const totalQty = theProducts[index].qty + 1;
      if (index > -1) {
        theProducts.splice(index, 1);
      }
      prd = {
        id: prdID,
        qty: totalQty
      }
    } else {
      prd = {
        id: prdID,
        qty: 1
      }
    }

    
    theProducts.push(prd);

    this.bagSrv.updateBagByUserID(theProducts, this.userID);
    // alert('Added to cart')
    this.toastr.success(`Added to cart.`, 'Done', {
      closeButton: true,
      timeOut: 5000,
      progressBar: true
    });
  }

  addToWishlist(prdID: any) {
    let theProducts = [...this.productsInWishlist];

    theProducts.push(prdID);

    this.wishSrv.updateWishlistByUserID(theProducts, this.userID);
    // alert('Added to wishlist')
    this.toastr.success(`Added to wishlist.`, 'Done', {
      closeButton: true,
      timeOut: 5000,
      progressBar: true
    });
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
