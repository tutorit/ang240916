import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluralPipe } from './plural.pipe';



@NgModule({
  declarations: [
    PluralPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PluralPipe
  ]
})
export class PipeModule { }
