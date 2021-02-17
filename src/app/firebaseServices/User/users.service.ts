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
  getSpcUser(userId: number) {
    return this.firestore.collection('users/' + userId).snapshotChanges();
  }
  createUser(user: UserModel) {
    return this.firestore.collection('users').add(user);
  }
  updateUser(user: UserModel) {
    delete user.id;
    this.firestore.doc('users/' + user.id).update(user);
  }
  deleteUser(userId: number) {
    this.firestore.doc('users/' + userId).delete();
  }
}