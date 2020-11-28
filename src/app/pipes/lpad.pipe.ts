import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lpad'
})
export class LpadPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
