import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductModel } from 'src/app/models/productModel';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: AngularFirestore) { }

  getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }
  getSpcProduct(prodId: number) {
    return this.firestore.collection('products/' + prodId).snapshotChanges();
  }
  createProduct(prod: ProductModel) {
    return this.firestore.collection('products').add(prod);
  }
  updateProduct(prod: ProductModel) {
    delete prod.id;
    this.firestore.doc('products/' + prod.id).update(prod);
  }
  deleteProduct(prodId: number) {
    this.firestore.doc('products/' + prodId).delete();
  }
}