import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Event } from './models/event';
import { AngularFireDatabase } from 'angularfire2/database';
import { News } from './models/news';

@Injectable()
export class EventService {

  private eventPath = '/events/';

  constructor(private db: AngularFireDatabase) { }

  getAll(): Observable<Event[]> {
    return this.db.list<Event>('events').valueChanges();
  }

  getById(id): Observable<Event> {
    return <Observable<Event>>this.db.object(this.eventPath + id).valueChanges();
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

  create(event: Event) {
    this.db.list<Event>('events').push(event);
  }

}
