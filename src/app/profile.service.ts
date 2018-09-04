import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProfileService {

  constructor(
    private db: AngularFireDatabase,
  ) { }


  getProfile(uid) {
    this.db.object('/profiles/' + uid).valueChanges();
  }

  saveProfile(profile) {
    this.db.object('/profiles/' + profile.uid).set(profile);
  }

  registerRace(profileId, raceId) {
    this.db.object('/profiles/' + profileId + '/races/' + raceId).set({registered: true});
  }
}
