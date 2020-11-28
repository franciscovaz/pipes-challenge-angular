import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rpad'
})
export class RpadPipe implements PipeTransform {

  transform(rpad: string, numberOfRPads?: number, simbol?: string): string {
    if(!rpad) {
      return 'Inválido';
    }

    let numberOfChars: number = rpad.length;
    let stringToReturn: string = '';

    if(numberOfRPads) {
      let numberOfSimbolsToAdd = numberOfRPads - numberOfChars;
      for(let i=0; i < numberOfSimbolsToAdd; i++){
        if(simbol){
          stringToReturn+=`${simbol}`;
        }else {
          stringToReturn+=`*`;
        }
      }
      return `${rpad}${stringToReturn}`
    } else {
      return `${rpad}*****`;
    }
  }
}
