import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MyBagModel } from 'src/app/models/bagModel';
@Injectable({
  providedIn: 'root'
})
export class BagsService {

  constructor(private firestore: AngularFirestore) { }

  getMyBags() {
    return this.firestore.collection('bags').snapshotChanges();
  }
  getSpcMyBag(bagId:any) {
    return this.firestore.collection('bags').doc(bagId).snapshotChanges();
  }
  createMyBag(myBag: MyBagModel) {
    return this.firestore.collection('bags').add(myBag);
  }
  updateMyBag(myBag: MyBagModel){
    delete myBag.id;
    this.firestore.doc('bags/' + myBag.id).update(myBag);
}
deleteMyBag(bagId:number){
  this.firestore.doc('bags/' + bagId).delete();
}
}
