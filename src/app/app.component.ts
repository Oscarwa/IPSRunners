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
  }

  login() {
    this.auth.login();
  }

}
