import {FournisseurComponent} from "./fournisseur/fournisseur.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

const ROUTES: Routes = [

  {path:'fournisseur', component: FournisseurComponent},

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[
    RouterModule
  ]
})
export class FournisseurRoutingModule { }
