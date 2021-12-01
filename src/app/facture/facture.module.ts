import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FractureComponent } from './facture/facture.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { AddDetailFactureComponent } from './add-detail-facture/add-detail-facture.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FractureComponent,
    DetailFactureComponent,
    AddDetailFactureComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FactureModule { }
