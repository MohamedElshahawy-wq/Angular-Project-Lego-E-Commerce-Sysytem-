import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { MyBagModel } from 'src/app/models/bagModel';
import { WishListModel } from 'src/app/models/wishlistModel';


export interface User {
  uid: string,
  email: string,
  password: string,
  displayName: string,
  birthday: {
    month: number,
    day: number,
    year: number
  };
  termsandconditionsCheck?: boolean;
  isAdmin?: boolean;
}



@Injectable({
  providedIn: 'root'
})

export class NgAuthService {

    //newCustomer: ICustomer|any;
    userState: any;

    constructor(
      public afs: AngularFirestore,
      public afAuth: AngularFireAuth,
      public router: Router,
      public ngZone: NgZone,
      private toastr: ToastrService
    ) {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userState = user;
          localStorage.setItem('user', JSON.stringify(this.userState));
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
      })
    }
  
    SignIn(email, password) {
      return this.afAuth.signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.ngZone.run(() => {
            this.router.navigate(['/Home']);
          });
          //this.SetUserData(result.user);
        }).catch((error) => {
          // window.alert(error.message)
          this.toastr.error(`${error.message}`, 'Error', {
            closeButton: true,
            timeOut: 5000,
            progressBar: true
          });
        })
    }
  
    SignUp(user) {
      return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
        .then((result) => {
          //this.SendVerificationMail();
          this.SetUserData(user, result.user);
          this.SetBag(result.user);
          this.SetWishlist(result.user);
          this.router.navigate(['/Home']);
        }).catch((error) => {
          this.toastr.error(`${error.message}`, 'Error', {
            closeButton: true,
            timeOut: 5000,
            progressBar: true
          });
        })
    }   
  
    ForgotPassword(passwordResetEmail) {
      return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        // window.alert('Password reset email sent, check your inbox.');
        this.toastr.info(`Password reset email sent, check your inbox.`, 'Info', {
          closeButton: true,
          timeOut: 5000,
          progressBar: true
        });
      }).catch((error) => {
        this.toastr.error(`${error.message}`, 'Error', {
          closeButton: true,
          timeOut: 5000,
          progressBar: true
        });
      })
    }
  
    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return (user !== null) ? true : false;
    }
  
    get userLoggedID(): string{
      const user = JSON.parse(localStorage.getItem('user'));
      return user.uid;
    }

    getUser(){
      const user = JSON.parse(localStorage.getItem('user'));
      return user.uid;
    }
  
    SetUserData(user, forID) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${forID.uid}`);
      const userState: User = {
        uid: forID.uid,
        email: user.email,
        password: user.password,
        displayName: user.displayName,
        birthday : user.birthday,
        termsandconditionsCheck: user.termsandconditionsCheck,
        isAdmin: user.isAdmin
      }
      

      return userRef.set(userState, {
        merge: true
      })
    }

    SetBag(forID) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`bags/${forID.uid}`);
      const userState: MyBagModel = {
        userID: forID.uid,
        productsIDs: []
      }

      return userRef.set(userState, {
        merge: true
      })
    }

    SetWishlist(forID) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`wishlist/${forID.uid}`);
      const userState: WishListModel = {
        userID: forID.uid,
        productsIDs: []
      }

      return userRef.set(userState, {
        merge: true
      })
    }
   
    SignOut() {
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['/Home']);
      })
    }  
}