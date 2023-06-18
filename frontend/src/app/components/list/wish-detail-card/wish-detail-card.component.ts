import { Component, Input } from '@angular/core';
import { WishConsultDto } from 'src/app/objects/wishConsultDto';
import { WishStatusService } from 'src/app/services/wish-status.service';

@Component({
  selector: 'app-wish-detail-card',
  templateUrl: './wish-detail-card.component.html',
  styleUrls: ['./wish-detail-card.component.scss']
})
export class WishDetailCardComponent {

  @Input()
  wishConsultData: WishConsultDto;

  constructor(private readonly wishStatusService: WishStatusService) { }

 private getCircleColor(status: string): string {
    return this.wishStatusService.getStatusColor(status);
 }

 private getLibelleStatus(status: string): string{
  return this.wishStatusService.getLibelleStatus(status);
 }

 private getStatusDescription(status: string): string{
  return this.wishStatusService.getStatusDescription(status);
 }
}


