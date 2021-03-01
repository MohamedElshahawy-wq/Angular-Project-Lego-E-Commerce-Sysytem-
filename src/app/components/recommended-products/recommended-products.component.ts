import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/firebaseServices/Product/products.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BagsService } from 'src/app/firebaseServices/MyBag/bags.service';
import { WishlistService } from 'src/app/firebaseServices/WishList/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { NgAuthService } from 'src/app/Services/Authentication/ng-auth.service';

@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.scss']
})
export class RecommendedProductsComponent implements OnInit, OnDestroy {
  ProductList1 = [];
  ProductList2 = [];

  userID: any;
  bag: any;
  wishlist: any;
  productsInBag: any;
  productsInWishlist: any;

  subscription: Subscription[] = [];

  AllProducts = [];
  constructor(private prodserv: ProductsService,
    private route: Router,
    private bagSrv: BagsService,
    private wishSrv: WishlistService,
    private toastr: ToastrService,
    public translate: TranslateService,
    public ngAuthService: NgAuthService) { }

  ngOnInit(): void {

    if (this.ngAuthService.isLoggedIn === true) {
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
    }

    this.subscription.push(this.prodserv.getProducts().subscribe(data => {
      this.AllProducts = data.map(e => {
        return { id: e.payload.doc.id, ...(e.payload.doc.data() as {}) };
      })
      this.ProductList1 = this.AllProducts.slice(0, 4)
      this.ProductList2 = this.AllProducts.slice(4, 8)
    }))
  }

  ngOnDestroy(): void {
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
  }

  addToBag(prdID: any) {
    if (this.ngAuthService.isLoggedIn === true) {

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
    } else {
      this.toastr.error(`You need to login first.`, 'Error', {
        closeButton: true,
        timeOut: 5000,
        progressBar: true
      });
    }
  }

  addToWishlist(prdID: any) {
    if (this.ngAuthService.isLoggedIn === true) {

      let theProducts = [...this.productsInWishlist];

      theProducts.push(prdID);

      this.wishSrv.updateWishlistByUserID(theProducts, this.userID);
      // alert('Added to wishlist')
      this.toastr.success(`Added to wishlist.`, 'Done', {
        closeButton: true,
        timeOut: 5000,
        progressBar: true
      });
    } else {
      this.toastr.error(`You need to login first.`, 'Error', {
        closeButton: true,
        timeOut: 5000,
        progressBar: true
      });
    }
  }

  ShowProduct(id: number) {
    this.route.navigate(['Product', id]);
  }
}
