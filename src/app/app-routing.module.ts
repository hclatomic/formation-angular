import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProfilComponent } from './pages/profil/profil.component';
//import { NewsComponent } from './pages/news/news.component';
import { ModalModule } from './lib/modules/modal/modal.module';
import { CommonModule } from '@angular/common';  
import { WeekDayOfBirthModule } from './lib/pipes/week-day-of-birth/week-day-of-birth.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  },
  /*{
    path: 'news',
    component: NewsComponent
  },*/
  { path : 'news',
      loadChildren:'./pages/news/news.module#NewsModule',
  },
  { 
    path : '**', 
    redirectTo : '', 
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    ModalModule,
    CommonModule,
    WeekDayOfBirthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

