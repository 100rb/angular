import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertString',
  pure: true
})
export class ConvertStringPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    if (args[0] == 1) {
      value = value + ' ' + args[0];
    } else {
      value = value + ' ' + 'Saur';
    }
    return value;
  }

}
