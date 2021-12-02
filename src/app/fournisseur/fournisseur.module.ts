import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FournisseurRoutingModule} from "./fournisseur-routing.module";
import { FormFournisseurComponent } from './form-fournisseur/form-fournisseur.component';
import { MainFournisseurComponent } from './main-fournisseur/main-fournisseur.component';

@NgModule({
  declarations: [
    FournisseurComponent,
    FormFournisseurComponent,
    MainFournisseurComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    FournisseurRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    MainFournisseurComponent
  ],
  bootstrap: [MainFournisseurComponent]
})
export class FournisseurModule { }
