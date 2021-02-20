import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { WishListModel } from 'src/app/models/wishlistModel';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private firestore: AngularFirestore,
    public afs: AngularFirestore) { }

  getWishlists() {
    return this.firestore.collection('wishlist').snapshotChanges();
  }
  getSpcWishlist(wishlistId: any) {
    return this.firestore.collection('wishlist').doc(wishlistId).snapshotChanges();
  }

  getWishlistByUserID(userID: any) {
    return this.firestore.collection('wishlist', ref => ref.where("userID","==", userID)).snapshotChanges();
  }

  createWishlist(wishlist: WishListModel) {
    return this.firestore.collection('wishlist').add(wishlist);
  }

  updateWishlistByUserID(prds: any, forID: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`wishlist/${forID}`);
      const userState: WishListModel = {
        productsIDs: prds
      }

      return userRef.set(userState, {
        merge: true
      })
  }

  deleteWishlist(wishlistId: number) {
    this.firestore.doc('wishlist/' + wishlistId).delete();
  }
}