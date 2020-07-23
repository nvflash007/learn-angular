import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string, gender: string): string{
    let prefix = 'Mr. ';
    if (gender && gender === 'femail') prefix = 'Mrs. ';
    return prefix + value;
  }

}
