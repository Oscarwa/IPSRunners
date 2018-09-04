import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Profile } from '../models/profile';
import { ProfileService } from '../profile.service';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile = new Profile ('', '', '', '', '', '', '', '', false);

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) { }

  _dob;

  ngOnInit() {
    this.authService.currentUser.subscribe(() => {
      this.profile = this.authService.profile;
      this._dob = new Date(this.profile.dob);
      console.log(this.profile)
    })
    //this.profile = this.authService.profile || this.profile;
  }

  save() {
    this.profile.dob = moment(this._dob).format()
    this.profileService.saveProfile(this.profile);
  }

}
