import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureComponent } from './facture/facture.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';



@NgModule({
  declarations: [
    FactureComponent,
    DetailFactureComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FactureModule { }
