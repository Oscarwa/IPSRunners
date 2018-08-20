import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  auth;

  constructor(auth: AuthService) {
    this.auth = auth;
    this.login();
  }

  login() {
    this.auth.login();
    //this.auth.currentUser.subscribe((e) => { console.log(e)})

  }

  logout() {
    this.auth.logout();
    //this.auth.currentUser.subscribe((e) => { console.log(e)})
    
  }

}
