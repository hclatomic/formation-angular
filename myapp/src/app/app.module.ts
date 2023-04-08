import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//import { NewsComponent } from './pages/news/news.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule }  from '@angular/common/http';

import { ApiService } from './lib/services/api.service';
import { StoreService } from './lib/services/store.service';
import { ProfilComponent } from './pages/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilComponent,
    //NewsComponent,
    //WeekDayOfBirthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [
    ApiService,
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
