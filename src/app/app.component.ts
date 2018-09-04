import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user;
  title = 'app';

  constructor(
    private auth: AuthService,
  ) {
    this.auth = auth;
    //this.login();
    this.auth.currentUser.subscribe((e) => { this.user = e;})
  }

  login() {
    this.auth.login();

  }

  logout() {
    this.auth.logout();    
  }

}
