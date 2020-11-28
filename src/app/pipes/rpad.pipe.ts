import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rpad'
})
export class RpadPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
