import { Component, OnDestroy, OnInit } from '@angular/core';
import { BagsService } from 'src/app/firebaseServices/MyBag/bags.service';
import { ProductsService } from 'src/app/firebaseServices/Product/products.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-bbag',
  templateUrl: './my-bbag.component.html',
  styleUrls: ['./my-bbag.component.scss']
})

export class MyBBagComponent implements OnInit, OnDestroy {

  bag;
  ProductList = [];
  productsInBag;
  temp;

  subscription: Subscription[] = [];
  userID: any;

  constructor(private bagSrv: BagsService, private prdSrv: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
    this.userID = JSON.parse(localStorage.getItem('user')).uid;
    this.subscription.push(this.bagSrv.getSpcMyBag(this.userID).subscribe(data => {
      this.bag = { id: data.payload.id, ...(data.payload.data() as {}) };

      this.productsInBag = this.bag.productsIDs;

      this.ProductList = [];

      this.productsInBag.forEach(element => {
        this.subscription.push(this.prdSrv.getSpcProduct(element.id).subscribe(data => {
          this.temp = { id: data.payload.id, theQty: element.qty, ...(data.payload.data() as {}) };
          if (!this.ProductList.some(item => item.id === this.temp.id)) {
            this.ProductList.push(this.temp);
          }
        }))
        console.log(this.ProductList);
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
    let theProducts = [...this.productsInBag];

    var result = theProducts.find(obj => {
      return obj.id === prdID
    })

    const index = theProducts.indexOf(result);
    if (index > -1) {
      theProducts.splice(index, 1);
    }
    this.bagSrv.updateBagByUserID(theProducts, this.userID);
  }

  goToProduct(id: number) {
    this.router.navigate([`Product/${id}`]);
  }

  goToCheckout() {
    this.router.navigate(['CheckOut'])
  }

  getTotal = function () {
    var total = 0;
    for (var i = 0; i < this.ProductList.length; i++) {
      var prd = this.ProductList[i];
      total += (prd.price * prd.theQty);
    }
    return total;
  }


}
