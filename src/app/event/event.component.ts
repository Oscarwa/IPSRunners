import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
import { News } from '../models/news';
import * as moment from 'moment';
import { Event } from '../models/event';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventId;
  event: Event = new Event('','','','',[],'',true,'');
  relativeTime;

  constructor(
    private routeHelper: ActivatedRoute,
    private eventService: EventService,
  ) {
    this.routeHelper.params.subscribe( params => {
      if(!!params.id) {
        this.getEvent(params.id);
      }
    })
   }

  distances = [
    "5K",
    "10K",
    "15K",
    "21K"
  ]

  ngOnInit() {
    //this.eventId.
    let now = moment(); // add this 2 of 4
    let w = moment('21/10/2018');
    console.log('hello world', now.format());
  }

  getEvent(eventId) {
    this.eventId = eventId;
    this.eventService.getById(eventId).subscribe(e => {
      this.event = e; 
      this.relativeTime = moment(e.date, 'DD/MM/YYYY').startOf('day').fromNow();
    });
  }

}
