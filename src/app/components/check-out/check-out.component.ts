import { Component, OnDestroy, OnInit } from '@angular/core';
import { BagsService } from 'src/app/firebaseServices/MyBag/bags.service';
import { ProductsService } from 'src/app/firebaseServices/Product/products.service';
import { Subscription } from 'rxjs';
import { OrderModel } from 'src/app/models/ordersModel';
import { OrdersService } from 'src/app/firebaseServices/Order/orders.service';
import { MyBagModel } from 'src/app/models/bagModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})


export class CheckOutComponent implements OnInit, OnDestroy {

  Username: string;
  City: string;
  Street: string;
  Zip: string;
  totalPrice: number = 0;
  tax: number = 14;
  ordarTotal: number = 0;
  mobilePhone: string;
  bag;
  newBag: MyBagModel;
  ProductList = [];
  productsInBag;
  temp;
  subscription: Subscription[] = [];
  userID: any;
  order: OrderModel;
  constructor(private bagSrv: BagsService,
    private prdSrv: ProductsService,
    private orderser: OrdersService,
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
      })
    })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
  }

  getTotal = function () {
    var total = 0;
    for (var i = 0; i < this.ProductList.length; i++) {
      var prd = this.ProductList[i];
      total += (prd.price * prd.theQty);
    }
    return total;
  }
  addOrder() {
    var dateoftoday = new Date();
    var newStock;
    this.totalPrice = this.getTotal();
    var create = true;
    console.log(this.productsInBag);
    console.log(this.ProductList);
    for(var i = 0;i<this.ProductList.length; i++) {
      var element = this.ProductList[i];
      newStock = element.stock - element.theQty;
      if (newStock < 0) {
        alert(`${element.name} is not in stock any more, edit your bag.`);
        create = false;
        break;
      }
      else {
        this.prdSrv.updateStock(newStock, element.id);
      }
    }
    if(!create) return;
    if (create) {
      this.order = {
        userID: this.userID,
        totalPrice: this.totalPrice,
        date: dateoftoday.toString(),
        productsIDs: this.productsInBag,
        address: {
          city: this.City,
          street: this.Street,
          zip: this.Zip
        },
        mobilePhone: this.mobilePhone
      }
      this.orderser.createOrder(this.order);
      this.newBag = {
        userID: this.userID,
        productsIDs: []
      }
      this.bagSrv.updateBagByUserID([], this.userID);
      this.router.navigate(['/AfterCheckout']);
    }
  }



}
