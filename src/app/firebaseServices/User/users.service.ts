import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserModel } from 'src/app/models/usersModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: AngularFirestore) { }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }
  getSpcUser(userId: any) {
    return this.firestore.collection('users').doc(userId).snapshotChanges();
  }
  createUser(user: UserModel) {
    return this.firestore.collection('users').add(user);
  }
  updateUser(user: UserModel) {
    //delete user.uid;
    this.firestore.doc('users/' + user.uid).update(user);
  }
  deleteUser(userId: number) {
    this.firestore.doc('users/' + userId).delete();
  }
}