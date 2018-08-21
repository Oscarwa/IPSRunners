import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Observable } from 'rxjs/Observable';
import { News } from '../news';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsList: Observable<News[]>;
  news: any[];

  constructor(
    private eventService: EventService,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.newsList = this.newsService.getAll();//.subscribe((e) => this.news = e);
  }

}
