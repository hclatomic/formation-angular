import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekDayOfBirth'
})
export class WeekDayOfBirthPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let weekDay: string = 'jour indéfini';

    if(value && value.match(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/)) {
      const arr = value.split('/').map((x: string) => parseInt(x, 10));
      const laDate = new Date(arr[2], arr[1], arr[0], 0, 0, 0, 1);
      switch(laDate.getDay()) {
        case 0: weekDay = 'dimanche'; break;
        case 1: weekDay = 'lundi'; break;
        case 2: weekDay = 'mardi'; break;
        case 3: weekDay = 'mercredi'; break;
        case 4: weekDay = 'jeudi'; break;
        case 5: weekDay = 'vendredi'; break;
        case 6: weekDay = 'samedi'; break;
      }

    }

    return weekDay;
  }

}
