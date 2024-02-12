// date-format.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return formatDate(value, 'yyyy-MM-dd\'T\'HH:mm:ss', 'en-US');
  }

}
