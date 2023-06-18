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

 // get la couleur du statut du wish depuis l'enum
 public getStatusColor(status: string): string {
    return this.colorStatusEnum[status];
 }

 // get le libelle du statut du wish depuis l'enum
 public getLibelleStatus(status: string): string{
  return Object.keys(this.statusNameEnum).includes(status) ? this.statusNameEnum[status] : status;
 }

 // get le statut du statut du wish depuis l'enum
 public getStatusDescription(status: string): string{
  return Object.keys(this.statusDescriptionEnum).includes(status) ? this.statusDescriptionEnum[status] : status;
 }
}