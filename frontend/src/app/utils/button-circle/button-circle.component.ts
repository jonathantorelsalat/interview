import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-circle',
  templateUrl: './button-circle.component.html',
  styleUrls: ['./button-circle.component.scss']
})
export class ButtonCircleComponent implements OnInit {

  @Input()
  libelle?: string = "libelle";

  @Input()
  backgroundColor?: string = "FFE38C";

  @Input()
  circleColor?: string = "#FF0000";

  @Input()
  readonly: boolean = false;

  isSelected: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getAriaLabel(): string {
    if (this.readonly==true) {
       return "Le statut de l'inscription est actuellement '"+this.libelle+"'";
    }
    return this.isSelected ? "Retirer le statut '"+this.libelle+"' des champs de recherche" :
      "Ajouter le statut '"+this.libelle+ "' aux champs de recherche";
  }

  updateSelection(): void{
    if (!this.readonly){
      this.isSelected = !this.isSelected;
    }
  }
}