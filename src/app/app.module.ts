import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';

// configs
import { environment } from '../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// services
import { AuthService } from './auth.service';
import { NewsService } from './news.service';
import { EventService } from './event.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    //angular material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    NewsService,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
