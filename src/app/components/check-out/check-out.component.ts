import { Component, OnInit } from '@angular/core';
import { BagsService } from 'src/app/firebaseServices/MyBag/bags.service';
import { ProductsService } from 'src/app/firebaseServices/Product/products.service';
import { Subscription } from 'rxjs';
import { OrderModel } from 'src/app/models/ordersModel';
import { OrdersService } from 'src/app/firebaseServices/Order/orders.service';
import { MyBagModel } from 'src/app/models/bagModel';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})


export class CheckOutComponent implements OnInit {

  Username:string;
  City:string;
  Street:string;
  Zip:string;
  totalPrice:number =0;
  tax : number =14;
  ordarTotal:number =0;
  mobilePhone:string;
  bag;
  newBag :MyBagModel;
  ProductList = [];
  productsInBag;
  temp;
  subscription: Subscription[] = [];
  userID: any;
  order:OrderModel;
  constructor( private bagSrv: BagsService ,
               private prdSrv: ProductsService,
               private orderser :OrdersService  ) { }

  ngOnInit(): void {

    this.userID = JSON.parse(localStorage.getItem('user')).uid;
    this.subscription.push(this.bagSrv.getSpcMyBag(this.userID).subscribe(data => {
      this.bag = { id: data.payload.id, ...(data.payload.data() as {}) };
      this.productsInBag = this.bag.productsIDs;
      this.ProductList = [];
      console.log(this.productsInBag)
      this.productsInBag.forEach(element => {
        console.log("---"+element)
        this.subscription.push(this.prdSrv.getSpcProduct(element).subscribe(data => {
          this.temp = { id: data.payload.id, ...(data.payload.data() as {}) };
          if (!this.ProductList.some(item => item.id === this.temp.id)) {
            console.log("hna")
            this.ProductList.push(this.temp);
          }

        }))
      })
    })
    );
   


  }
  getTotal = function () {
    var total = 0;
    for (var i = 0; i < this.ProductList.length; i++) {
      var prd = this.ProductList[i];
      total += prd.price;
    }
    return total;
  }
  addOrder(){
    var dateoftoday =new Date();
    this.totalPrice =this.getTotal();
    this.order ={
      userID:this.userID,
      totalPrice:this.totalPrice,
      date: dateoftoday.toString(),
      productsIDs: this.productsInBag,
      address: {
         city: this.City,
         street:this.Street,
         zip: this.Zip
      },
      mobilePhone:this.mobilePhone
    }
    console.log(this.order)
    this.orderser.createOrder(this.order).then((res)=>{
      console.log(res)
      console.log(this.order)
    })
    this.newBag ={
      userID:this.userID,
      productsIDs:[]
    }
    this.bagSrv.updateBagByUserID([],this.userID);
    alert("order is added");

  }



}
