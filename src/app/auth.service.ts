import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebase } from '@firebase/app';
import { Observable } from 'rxjs/Observable'
import { User } from '@firebase/auth-types';

@Injectable()
export class AuthService {
  currentUser: Observable<User>;
  constructor(public afAuth: AngularFireAuth) {
    
    this.currentUser = afAuth.authState;//.subscribe((e) => { this.currentUser = e; console.log(e); });
  }

  login() {
    //if(!this.currentUser) {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    //}
  }

  logout() {
    this.afAuth.auth.signOut();
    this.currentUser = null;
  }
}
