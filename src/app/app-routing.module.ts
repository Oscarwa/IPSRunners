import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'event/:id', component: EventComponent },
  
  {path: '', redirectTo: '/home', pathMatch: 'full'},  
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
