import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lpad'
})
export class LpadPipe implements PipeTransform {

  transform(lpad: string, numberOfLPads?: number, simbol?: string): string {
    if(!lpad) {
      return 'Inválido';
    }

    let numberOfChars: number = lpad.length;
    let stringToReturn: string = '';

    if(numberOfLPads) {
      let numberOfSimbolsToAdd = numberOfLPads - numberOfChars;
      for(let i=0; i < numberOfSimbolsToAdd; i++){
        if(simbol){
          stringToReturn+=`${simbol}`;
        }else {
          stringToReturn+=`*`;
        }
      }
      return stringToReturn.concat(`${lpad}`);
    } else {
      return `*****${lpad}`;
    }
  }

}
