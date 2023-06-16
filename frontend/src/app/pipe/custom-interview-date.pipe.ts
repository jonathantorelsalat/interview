import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customInterviewDate'
})
export class CustomInterviewDatePipe implements PipeTransform {

  transform(value: string): string {
    var listDateVal = value.split(' ');
    return listDateVal.length === 3 ? listDateVal[0]+" "+listDateVal[1].slice(0,3)+". "+listDateVal[2] : value;
  }
}
