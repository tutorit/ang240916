import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural'
})
export class PluralPipe implements PipeTransform {

  transform(value:number, termit:[string,string]): string {
    if (value==1) return value+" "+termit[0];
    return value+" "+termit[1];
  }

}


/*
 {{numero | plural:['Kirja',"Kirjaa"]}}
*/