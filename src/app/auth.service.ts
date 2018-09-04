import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebase } from '@firebase/app';
import { Observable } from 'rxjs/Observable'
import { User } from '@firebase/auth-types';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Profile } from './models/profile';


@Injectable()
export class AuthService {
  currentUser: Observable<User>;
  public profile;
  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
  ) {
    
    this.currentUser = afAuth.authState;//.subscribe((e) => { this.currentUser = e; console.log(e); });

    afAuth.authState.subscribe(
      (e) => { 
        this.profile = new Profile(e.uid, e.email, e.displayName.split(' ')[0], e.displayName.split(' ')[1], '','','','', false);
        // search if uid exists in profile document
        this.db.object('/profiles/' + e.uid).valueChanges().subscribe((p) => {
          if(!p) {
            this.router.navigate(['profile']);
          } else {
            this.profile = p;
          }
        })
      }
    );
  }

  Profile(): Observable<Profile> {
    return Observable.of(this.profile);
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
