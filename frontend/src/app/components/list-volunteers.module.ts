import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { ListComponent } from './list/list.component';
import { UtilsModule } from '../utils/utils.module';
import { WishDetailCardComponent } from './list/wish-detail-card/wish-detail-card.component';
import { PipeModule } from '../pipe/pipe.module';

const VOLUNTEERS_ROUTES: Routes = [
  { path: '', redirectTo: 'volunteers', pathMatch: 'full'},
  { path: 'volunteers', children: [
    { path: '', component: VolunteersComponent },
  ]}
]

@NgModule({
  declarations: [
    VolunteersComponent,ListComponent, WishDetailCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(VOLUNTEERS_ROUTES),
    FontAwesomeModule,
    UtilsModule,
    PipeModule
  ]
})
export class ListVolunteersModule { }
