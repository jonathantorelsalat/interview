import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators/tap';
import { ColorStatusName, StatusName } from 'src/app/objects/statistics';
import { WishConsultDto } from 'src/app/objects/wishConsultDto';
import { WishStatusDto } from 'src/app/objects/wishStatusDto';
import { WishService } from 'src/app/services/wish.service';
import { isNullOrUndefined } from 'util';
import { WishStatusService } from 'src/app/services/wish-status.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private statusWishCount: Record<string,number>; 
  private totalElement: number = 0;
  private statusNameEnum = StatusName;
  private wishesData: WishConsultDto[];
  private wishesDataNumberResults: number;
  private listStatusToload: string[]=[];

  constructor(private readonly wishService: WishService,
    private readonly wishStatusService: WishStatusService) { }

  ngOnInit() {
    this.initCountData();
    this.initFirstLoad();
  }

  private initCountData(): void {
    this.wishService.countWishByStatus().
    pipe(take(1))
    .subscribe(
      statusWishCount => {
        this.statusWishCount = statusWishCount.whishCountByStatus;
        this.totalElement=0;
        for (let key in this.statusWishCount){
          this.totalElement+=this.statusWishCount[key];
        }
      }
    );
  }

  private initFirstLoad(): void{
    let completeStatusList: string[] =[]
    for (let key in this.statusNameEnum){
      completeStatusList.push(key);
    }
    this.loadWishesData(completeStatusList);
  }

  private getSizeBar(status: string): number{
    return (!isNullOrUndefined(this.statusWishCount) &&!isNullOrUndefined(this.statusWishCount[status]) && this.totalElement > 0) ? 
      (100*this.statusWishCount[status])/this.totalElement : 0;
  }

  private getCircleColor(status: string): string {
     return this.wishStatusService.getCircleColor(status);
  }

  private buttonClicked(updateStatus: string): void {
    if (this.listStatusToload.includes(updateStatus)) {
      this.listStatusToload =this.listStatusToload.filter(status => status !== updateStatus)
    }
      else {
        this.listStatusToload = this.listStatusToload.concat(updateStatus);
      }
    this.loadWishesData(this.listStatusToload);
  }

  private loadWishesData(statusList: string[]): void {
    this.wishService.getAllWishConsultByStatus(statusList)
    .pipe(take(1))
    .subscribe(
      data => {
        this.wishesData = data;
        this.wishesDataNumberResults = data.length;
      });
  }

  private inputStatusListEmpty(): boolean {
    return this.listStatusToload.length === 0;
  }
}