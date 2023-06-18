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
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // Use pour data display
  private statusWishCount: Record<string,number>; 
  private totalElement: number = 0;
  private statusNameEnum = StatusName;
  private wishesData: WishConsultDto[];
  private wishesDataNumberResults: number;
  private listStatusToload: string[]=[];

  // Gestion scroll
  private isLoading: boolean = false;
  private currentPage: number = 1;
  private defaultWishesPerPage: number = 10;
  private wishesInScroll: WishConsultDto[]=[];


  constructor(private readonly wishService: WishService,
    private readonly wishStatusService: WishStatusService,
    private readonly paginationService: PaginationService
    ) { }

  ngOnInit() {
    this.initCountData();
    this.initFirstLoad();
  }

  // Chargement du compteur de statut
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

  // Premier chargement des données, tous statuts
  private initFirstLoad(): void{
    let completeStatusList: string[] =[]
    for (let key in this.statusNameEnum){
      completeStatusList.push(key);
    }
    this.loadWishesData(completeStatusList);
  }

  // Calcul de la taille en % de chaque statut pour la sizebar
  private getSizeBar(status: string): number{
    return (!isNullOrUndefined(this.statusWishCount) &&!isNullOrUndefined(this.statusWishCount[status]) && this.totalElement > 0) ? 
      (100*this.statusWishCount[status])/this.totalElement : 0;
  }

  // Couleur des circles dans les boutons
  private getCircleColor(status: string): string {
     return this.wishStatusService.getStatusColor(status);
  }

  // Gestion de la liste des statuts à rechercher en fonction des boutons selectionnés
  private buttonClicked(updateStatus: string): void {
    if (this.listStatusToload.includes(updateStatus)) {
      this.listStatusToload =this.listStatusToload.filter(status => status !== updateStatus)
    }
      else {
        this.listStatusToload = this.listStatusToload.concat(updateStatus);
      }
    this.loadWishesData(this.listStatusToload);
  }

  // Chargement des données
  private loadWishesData(statusList: string[]): void {
    this.wishService.getAllWishConsultByStatus(statusList)
    .pipe(take(1))
    .subscribe(
      data => {
        this.wishesData = data;
        this.wishesDataNumberResults = data.length;
        this.loadData(data, data.length);
      });
  }

  // Vérifie si le user a selectionner un statut
  private inputStatusListEmpty(): boolean {
    return this.listStatusToload.length === 0;
  }

  private toggleLoading = ()=>this.isLoading=!this.isLoading;

  // Réinit du scroll à chaque nouveau chargement des données
  private loadData= (wishesData: WishConsultDto[], totalWishes: number)=>{
    this.toggleLoading();
    this.currentPage = 1;
    this.paginationService.getItems(this.currentPage,this.defaultWishesPerPage,wishesData,totalWishes).subscribe({
     next:response=> 
      this.wishesInScroll = response,
     complete:()=>this.toggleLoading()
    })
  }

  // Ajout des données lorsque le scroll arrive en bas
  private appendData= ()=>{
    this.toggleLoading();
    this.paginationService.getItems(this.currentPage,this.defaultWishesPerPage, this.wishesData,this.wishesDataNumberResults).subscribe({
      next:response=>this.wishesInScroll = [...this.wishesInScroll,...response],
      complete:()=>this.toggleLoading()
    })
  }

  private onScroll= ()=>{
  this.currentPage++;
  this.appendData();
  }
}