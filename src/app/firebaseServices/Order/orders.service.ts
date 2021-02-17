import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { OrderModel } from 'src/app/models/ordersModel';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private firestore: AngularFirestore) { }

  getOrders() {
    return this.firestore.collection('orders').snapshotChanges();
  }
  getSpcOrder(orderId: number) {
    return this.firestore.collection('orders/' + orderId).snapshotChanges();
  }
  createOrder(order: OrderModel) {
    return this.firestore.collection('orders').add(order);
  }
  updateOrder(order: OrderModel) {
    delete order.id;
    this.firestore.doc('orders/' + order.id).update(order);
  }
  deleteOrder(orderId: number) {
    this.firestore.doc('orders/' + orderId).delete();
  }
}