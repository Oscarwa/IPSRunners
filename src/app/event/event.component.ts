import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
import { News } from '../models/news';
import * as moment from 'moment';
import { Event } from '../models/event';
import { AuthService } from '../auth.service';
import { ProfileService } from '../profile.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventId;
  event: Event = new Event('','','','',[],'',true,'', '', []);
  relativeTime;
  choosenDistance;

  constructor(
    private routeHelper: ActivatedRoute,
    private eventService: EventService,
    private profileService: ProfileService,
    private authService: AuthService,
  ) {
    this.routeHelper.params.subscribe( params => {
      if(!!params.id) {
        this.getEvent(params.id);
      }
    })
   }

  registration: any = {};
  registeredAlready = false;
  participantSource;
  displayedColumns: string[] = ['email', 'name', 'gender', 'distance', 'phone'];

  ngOnInit() {
  }

  getEvent(eventId) {
    this.eventId = eventId;
    this.eventService.getById(eventId).subscribe(e => {
      this.event = e; 
      this.eventService.getParticipantData(eventId, this.authService.profile.uid).subscribe((data) => {
        if(!!data) {
          this.choosenDistance = data.distance;
          this.registeredAlready = true;
        }
      });
      this.relativeTime = moment(e.date, 'DD/MM/YYYY').startOf('day').fromNow();

      let tmpArray = Object.keys(e.participants).map((key) => {
        return e.participants[key];
      });
      this.participantSource = new MatTableDataSource(tmpArray);
    });
  }

  register(dist) {
    
    this.registration.user = this.authService.profile;
    this.registration.event = this.event;
    this.registration.event.uid = this.eventId;
    this.registration.distance = this.choosenDistance;
    this.eventService.addParticipant(this.registration);
    this.profileService.registerRace(this.registration.user.uid, this.eventId);
    this.registeredAlready = true;
    //console.info(this.registration);
    //console.info(dist);
  }

}
