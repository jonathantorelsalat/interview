import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { WishConsultDto } from '../objects/wishConsultDto';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  // service permettant d'extraire la quantité d'item demandés avec les informations fournies
  getItems(page= 1,itemsPerPage=10, itemList: WishConsultDto[], totalItemNumber: number):Observable<WishConsultDto[]>{
    const startIndex=(page-1)*itemsPerPage;
    const endIndex=startIndex+itemsPerPage;
    const items=[];
    for(let i=startIndex;i<endIndex;i++){
     if(i<totalItemNumber){
       items.push(itemList[i]);
     }
    }
    return of(items);
   }
}
