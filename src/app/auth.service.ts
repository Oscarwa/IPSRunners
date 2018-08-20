import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebase } from '@firebase/app';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AuthService {
  currentUser: any;
  constructor(public afAuth: AngularFireAuth) {
    
    afAuth.authState.subscribe((e) => { this.currentUser = e; console.log(e); });
  }

  login() {
    if(!this.currentUser) {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
  }

  logout() {
    this.afAuth.auth.signOut();
    this.currentUser = null;
  }
}
