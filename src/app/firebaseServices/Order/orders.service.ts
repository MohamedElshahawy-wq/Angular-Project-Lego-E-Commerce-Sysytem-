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
  getSpcOrder(orderId: any) {
    return this.firestore.collection('orders').doc(orderId).snapshotChanges();
  }
  createOrder(order: OrderModel) {
    return this.firestore.collection('orders').add(order);
  }
  getOrderByUserID(userID: any) {
    return this.firestore.collection('orders', ref => ref.where("userID","==", userID)).snapshotChanges();
  }
  updateOrder(order: OrderModel) {
    delete order.id;
    this.firestore.doc('orders/' + order.id).update(order);
  }
  deleteOrder(orderId: number) {
    this.firestore.doc('orders/' + orderId).delete();
  }
}