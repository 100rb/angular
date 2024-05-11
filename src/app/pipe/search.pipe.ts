import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: true
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], name: string): any {
    debugger
    if (name) {
      value = value.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));
    }
    return value;
  }

}
