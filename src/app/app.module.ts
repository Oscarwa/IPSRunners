import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatCardModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

// configs
import { environment } from '../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

// services
import { AuthService } from './auth.service';
import { NewsService } from './news.service';
import { EventService } from './event.service';
import { ProfileService } from './profile.service';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    //angular material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,

    AppRoutingModule
  ],
  providers: [
    AuthService,
    NewsService,
    EventService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
