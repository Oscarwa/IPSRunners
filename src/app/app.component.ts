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
  auth;

  constructor(
    private auth: AuthService,
  ) {
    this.auth = auth;
    //this.login();
    this.auth.currentUser.subscribe((e) => { this.user = e; console.log(e)})
  }

  login() {
    this.auth.login();

  }

  logout() {
    this.auth.logout();
    //this.auth.currentUser.subscribe((e) => { console.log(e)})
    
  }

}
