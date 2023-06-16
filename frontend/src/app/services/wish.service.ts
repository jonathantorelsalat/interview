import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WishStatusDto } from '../objects/wishStatusDto';
import { WishConsultDto } from '../objects/wishConsultDto';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  private static readonly url: string = 'http://localhost:8080/api/wishes'; 

  constructor(private readonly httpClient: HttpClient) { }

  public countWishByStatus(): Observable<WishStatusDto>{
    return this.httpClient.get<WishStatusDto>(WishService.url+'/count/status');
  }

  public getAllWishConsultByStatus(statusList: string[]): Observable<Array<WishConsultDto>>{
    let params = new HttpParams({
      fromObject: {
        'status': statusList
      }
    });
    return this.httpClient.get<Array<WishConsultDto>>(WishService.url+'/status',{ params: params});
  }
}
