import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LostanimalsComponent } from './lostanimals/lostanimals.component';
import { LoginmodalComponent } from './login/loginmodal/loginmodal.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'accueil', component: CarouselComponent },
  { path: '', component: CarouselComponent },
  { path: 'animalperdu', component: LostanimalsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarouselComponent,
    LostanimalsComponent,
    LoginmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
