import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCircleComponent } from './button-circle/button-circle.component';
import { WishStatusService } from '../services/wish-status.service';



@NgModule({
  declarations: [ButtonCircleComponent
    ],
  imports: [
    CommonModule
  ],
  exports: [ButtonCircleComponent
    ]
})
export class UtilsModule { }
