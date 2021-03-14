import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ProductModel } from 'src/app/models/productModel';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: AngularFirestore,
    public afs: AngularFirestore) { }

  getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }
  getSpcProduct(prodId: any) {
    return this.firestore.collection('products').doc(prodId).snapshotChanges();
  }
  getProductsByCategoryID(catID: any) {
    return this.firestore.collection('products', ref => ref.where("categoryID","==", catID)).snapshotChanges();
  }
  updateStock(stock: any, forID: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`products/${forID}`);
      const userState: ProductModel = {
        stock: stock
      }

      return userRef.set(userState, {
        merge: true
      })
  }
  updateRate(rating: any, forID: any) {
    console.log(rating+" - "+forID);

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`products/${forID}`);
    console.log(userRef);
      const userState: ProductModel = {
        rating: rating
      }
      console.log(userRef);

      return userRef.set(userState, {
        merge: true
      })
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