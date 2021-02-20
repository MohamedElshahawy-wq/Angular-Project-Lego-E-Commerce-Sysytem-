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
  getSpcProduct(prodId: any) {
    return this.firestore.collection('products').doc(prodId).snapshotChanges();
  }
  getProductsByCategoryID(catID: any) {
    return this.firestore.collection('products', ref => ref.where("categoryID","==", catID)).snapshotChanges();
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