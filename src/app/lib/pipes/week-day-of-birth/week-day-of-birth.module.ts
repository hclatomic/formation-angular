import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekDayOfBirthPipe } from './week-day-of-birth.pipe';

@NgModule({
  declarations: [
    WeekDayOfBirthPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeekDayOfBirthPipe
  ]
})
export class WeekDayOfBirthModule { }
