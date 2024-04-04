import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortarraypipe'
})
export class SortarraypipePipe implements PipeTransform {

  transform(array: any[], property: string, order: 'asc' | 'desc' = 'asc'): any[] {
    if (!array) return [];
    return array.sort((a, b) => {
      if (order === 'asc') {
        return a[property] < b[property] ? -1 : 1;
      } else {
        return b[property] < a[property] ? -1 : 1;
      }
    });
  }

}
