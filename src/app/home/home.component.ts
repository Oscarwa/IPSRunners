import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Observable } from 'rxjs/Observable';
import { News } from '../models/news';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsList: Observable<News[]>;
  eventList: Observable<Event[]>;

  news: any[];

  constructor(
    private eventService: EventService,
    private newsService: NewsService,
    private auth: AuthService
  ) { }

  public profile;

  ngOnInit() {
    this.auth.currentUser.subscribe(() => {this.profile = this.auth.profile;})
    //this.newsList = this.eventService.getAllPlus();//.subscribe((e) => this.news = e);
    this.eventList = this.eventService.getAllPlus();
  }


  createEvent() {
    let ev = new Event('NombreDeCarrera','DD/MM/AAAA','300',"5K, 10K",["5K", "10K"],"Fundidora",true,"La carrera mas esperada del año");
    debugger;
    this.eventService.create(ev);
  }
}
