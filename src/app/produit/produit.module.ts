import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from './produit/produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { RayonComponent } from './rayon/rayon.component';
import { StockComponent } from './stock/stock.component';



@NgModule({
  declarations: [
    ProduitComponent,
    DetailProduitComponent,
    RayonComponent,
    StockComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProduitModule { }
