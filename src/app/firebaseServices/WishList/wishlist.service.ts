import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { WishListModel } from 'src/app/models/wishlistModel';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private firestore: AngularFirestore) { }

  getWishlists() {
    return this.firestore.collection('wishlist').snapshotChanges();
  }
  getSpcWishlist(wishlistId: number) {
    return this.firestore.collection('wishlist/' + wishlistId).snapshotChanges();
  }
  createWishlist(wishlist: WishListModel) {
    return this.firestore.collection('wishlist').add(wishlist);
  }
  updateWishlist(wishlist: WishListModel) {
    delete wishlist.id;
    this.firestore.doc('wishlist/' + wishlist.id).update(wishlist);
  }
  deleteWishlist(wishlistId: number) {
    this.firestore.doc('wishlist/' + wishlistId).delete();
  }
}