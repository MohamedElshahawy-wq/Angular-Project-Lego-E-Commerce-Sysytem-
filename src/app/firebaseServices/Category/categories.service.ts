import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CategoryModel } from 'src/app/models/categoriesModel';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private firestore: AngularFirestore) { }

  getCategories() {
    return this.firestore.collection('categories').snapshotChanges();
  }
  getSpcCategory(catId: any) {
    return this.firestore.collection('categories').doc(catId).snapshotChanges();
  }
  createCategory(myCat: CategoryModel) {
    return this.firestore.collection('categories').add(myCat);
  }
  updateCategory(myCat: CategoryModel){
    delete myCat.id;
    this.firestore.doc('categories/' + myCat.id).update(myCat);
}
deleteCategory(catId:number){
  this.firestore.doc('categories/' + catId).delete();
}
}