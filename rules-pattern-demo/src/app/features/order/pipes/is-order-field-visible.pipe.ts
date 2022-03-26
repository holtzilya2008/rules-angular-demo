import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isOrderFieldVisible'
})
export class IsOrderFieldVisiblePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
