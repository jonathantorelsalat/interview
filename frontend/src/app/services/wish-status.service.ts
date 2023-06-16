import { Injectable } from '@angular/core';
import { ColorStatusName, StatusDescription, StatusName } from '../objects/statistics';

@Injectable({
  providedIn: 'root'
})
export class WishStatusService {

  private colorStatusEnum = ColorStatusName;
  private statusNameEnum = StatusName;
  private statusDescriptionEnum = StatusDescription;

  constructor() { }


  public getCircleColor(status: string): string {
    return this.colorStatusEnum[status];
 }

 public getLibelleStatus(status: string): string{
  return Object.keys(this.statusNameEnum).includes(status) ? this.statusNameEnum[status] : status;
 }

 public getStatusDescription(status: string): string{
  return Object.keys(this.statusDescriptionEnum).includes(status) ? this.statusDescriptionEnum[status] : status;
 }
}