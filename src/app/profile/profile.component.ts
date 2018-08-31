import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Profile } from '../models/profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile = new Profile ('', '', '', '', '', '', '');

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.profile = this.authService.profile || this.profile;
  }

  save() {
    debugger;
    this.profileService.saveProfile(this.profile);
  }

}
