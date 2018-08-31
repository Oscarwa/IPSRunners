import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { News } from './models/news';
import 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class NewsService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getAll(): Observable<News[]> {
    return this.db.list<News>('news').valueChanges();
  }

  getAllPlus(): Observable<News[]> {
    return this.db.list<News>('news').snapshotChanges()
    .map(actions => {
      return actions.map(action => {
        const $key = action.payload.key;
        const data = { $key, ...action.payload.val() };
        return data;
      })
    });
  }

}
