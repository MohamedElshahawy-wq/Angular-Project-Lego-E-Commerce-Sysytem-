import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/firebaseServices/Product/products.service';
import { WishlistService } from 'src/app/firebaseServices/WishList/wishlist.service';
import { WishListModel } from 'src/app/models/wishlistModel';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit, OnDestroy {
  wishlist;
  ProductList = [];
  productsInWishlist;
  temp;
  userID;

  newWishlist: WishListModel;

  subscription: Subscription[] = [];

  constructor(private wishSrv: WishlistService, private prdSrv: ProductsService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.userID = JSON.parse(localStorage.getItem('user')).uid;
    this.subscription.push(this.wishSrv.getSpcWishlist(this.userID).subscribe(data => {
      this.wishlist = { id: data.payload.id, ...(data.payload.data() as {}) };

      this.productsInWishlist = this.wishlist.productsIDs;

      this.ProductList = [];

      this.productsInWishlist.forEach(element => {
        this.subscription.push(this.prdSrv.getSpcProduct(element).subscribe(data => {
          this.temp = { id: data.payload.id, ...(data.payload.data() as {}) };
          if (!this.ProductList.some(item => item.id === this.temp.id)) {
            this.ProductList.push(this.temp);
          }
        }))
      })
    })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
  }

  deleteProduct(prdID: any) {
    console.log(this.ProductList);
    let theProducts = [...this.productsInWishlist];
    const index = theProducts.indexOf(prdID);
    if (index > -1) {
      theProducts.splice(index, 1);
    }
    this.wishSrv.updateWishlistByUserID(theProducts, this.userID);
  }

  goToProduct(id: number) {
    this.router.navigate([`Product/${id}`]);
  }
}
