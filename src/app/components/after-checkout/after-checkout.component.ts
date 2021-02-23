import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrdersService } from 'src/app/firebaseServices/Order/orders.service';

@Component({
  selector: 'app-after-checkout',
  templateUrl: './after-checkout.component.html',
  styleUrls: ['./after-checkout.component.scss']
})
export class AfterCheckoutComponent implements OnInit {
  subscription: Subscription[] = [];
  userID: any;
  order: any;

  constructor(private orderSrv: OrdersService) { }

  ngOnInit(): void {
    this.userID = JSON.parse(localStorage.getItem('user')).uid;
    this.subscription.push(this.orderSrv.getOrderByUserID(this.userID).subscribe(data => {
      this.order = { id: data[0].payload.doc.id, ...(data[0].payload.doc.data() as {}) };
    }))
  }

}
