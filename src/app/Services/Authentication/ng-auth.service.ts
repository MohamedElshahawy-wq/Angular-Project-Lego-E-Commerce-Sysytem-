import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { ICustomer } from 'src/app/ViewModels/ICustomer';
import { identifierModuleUrl } from '@angular/compiler';


export interface User {
  uid: string,
  email: string,
  password: string,
  birthday: {
    month: number,
    day: number,
    year: number
  };
  termsandconditionsCheck?: boolean;
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
      public ngZone: NgZone
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
          window.alert(error.message)
        })
    }
  
    SignUp(user) {
      return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
        .then((result) => {
          //this.SendVerificationMail();
          console.log(".then " + user.password);
          this.SetUserData(user);
          this.router.navigate(['/Home']);
        }).catch((error) => {
          console.log(error.message)
        })
    }

    /*SendVerificationMail() {
        return this.afAuth.currentUser.then(u => u.sendEmailVerification())
        .then(() => {
          this.router.navigate(['email-verification']);
        })
    }*/    
  
    ForgotPassword(passwordResetEmail) {
      return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        console.log(error)
      })
    }
  
    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return (user !== null) ? true : false;
    }
  
    /*GoogleAuth() {
      return this.AuthLogin(new auth.GoogleAuthProvider());
    }
  
    AuthLogin(provider) {
      return this.afAuth.signInWithPopup(provider)
      .then((result) => {
         this.ngZone.run(() => {
            this.router.navigate(['/Home']);
          })
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
    }*/
  
    SetUserData(user) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
      const userState: User = {
        uid: user.uid,
        email: user.email,
        password: user.password,
        birthday : user.birthday,
        termsandconditionsCheck: user.termsandconditionsCheck
        
      }
      console.log(user);
      console.log(userState.password);

      return userRef.set(userState, {
        merge: true
      })
    }
   
    SignOut() {
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      })
    }  
}