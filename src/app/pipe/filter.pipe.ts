import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../model/hero';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: Hero[], field: string, phrase: string): Hero[] | null {
    if(!Array.isArray(list) || !field || !phrase) return list;

    phrase = ('' + phrase).toLowerCase();
    console.log(phrase);
    return list.filter(hero => {
      return ('' + hero[field]).toLowerCase().includes(phrase);
    });
  }

}
