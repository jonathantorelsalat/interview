import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInterviewDatePipe } from './custom-interview-date.pipe';



@NgModule({
  declarations: [CustomInterviewDatePipe],
  imports: [
    CommonModule
  ],
  exports: [CustomInterviewDatePipe]
})
export class PipeModule { }
