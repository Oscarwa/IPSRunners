import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  public user;
  private loaded: boolean = false;

  ngOnInit() {
    this.auth.currentUser.subscribe((u) => {
      if(!!u) {
        console.log(u);
        this.user = u;
        this.loaded = true;
      }
    })
  }

  login() {
    this.auth.login();
  }

}
