import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReviewModel } from 'src/app/models/reviewsModel';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private firestore: AngularFirestore) { }

  getReviews() {
    return this.firestore.collection('Reviews').snapshotChanges();
  }
  getSpcReview(reviewId: any) {
    return this.firestore.collection('Reviews').doc(reviewId).snapshotChanges();
  }

  getReviewsByProductId(prdID: any) {
    return this.firestore.collection('Reviews', ref => ref.where("productId","==", prdID)).snapshotChanges();
  }

  createReview(review: ReviewModel) {
    return this.firestore.collection('Reviews').add(review);
  }
  updateReview(review: ReviewModel) {
    delete review.id;
    this.firestore.doc('Reviews/' + review.id).update(review);
  }
  deleteReview(reviewId: number) {
    this.firestore.doc('Reviews/' + reviewId).delete();
  }
}