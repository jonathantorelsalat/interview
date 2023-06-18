import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customInterviewDate'
})
export class CustomInterviewDatePipe implements PipeTransform {

  // Prend une date string format jj mm aaaa, extrait les 3 premières lettres du mois et rajoute un point
  transform(value: string): string {
    var listDateVal = value.split(' ');
    return listDateVal.length === 3 ? listDateVal[0]+" "+listDateVal[1].slice(0,3)+". "+listDateVal[2] : value;
  }
}
