import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Event } from './event';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class EventService {

  constructor(private db: AngularFireDatabase) { }

  getAll(): Observable<Event[]> {
    return this.db.list<Event>('events').valueChanges();
  }

  getAllPlus(): Observable<Event[]> {
    return this.db.list<Event>('events').snapshotChanges()
    .map(actions => {
      return actions.map(action => {
        const $key = action.payload.key;
        const data = { $key, ...action.payload.val() };
        return data;
      })
    });
  }

}
