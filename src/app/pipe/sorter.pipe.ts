import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../model/hero';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(list: Hero[] | null, field: string): Hero[] | null {
    if(!Array.isArray(list) || !field ) return list;

    return list.sort((a: any, b: any) => {
      a = a[field]; b = b[field];
      if (!isNaN(a) && !isNaN(b)) return a - b;

      return (a + '').toLowerCase().localeCompare((b + '').toLowerCase());
    });
  }

}
