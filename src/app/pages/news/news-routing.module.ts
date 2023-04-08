import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { WeekDayOfBirthModule } from '../../lib/pipes/week-day-of-birth/week-day-of-birth.module';

const routes: Routes = [
  { path: '', 
		component: NewsComponent
	}
];


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WeekDayOfBirthModule
  ]
})
export class NewsRoutingModule { }
