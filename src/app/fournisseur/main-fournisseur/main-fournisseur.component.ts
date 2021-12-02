import { Component, OnInit } from '@angular/core';
import {FournisseurServiceService} from "../services/fournisseur-service.service";
import {Fournisseur} from "../../models/fournisseur";

@Component({
  selector: 'app-main-fournisseur',
  templateUrl: './main-fournisseur.component.html',
  styleUrls: ['./main-fournisseur.component.css']
})
export class MainFournisseurComponent implements OnInit {
  listFournisseur: Fournisseur[];
  inputFournisseur : Fournisseur = new Fournisseur();
  showFormTemplate: boolean;
  constructor(private fournisseurService: FournisseurServiceService) { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.fournisseurService.getListFournisseur().subscribe(
      (data:Fournisseur[])=> this.listFournisseur=data
    )
  }

  saveFournisseur(fournisseur: Fournisseur) {
    let i = this.listFournisseur.indexOf(fournisseur);
    if (i!= -1){
      //update a product
      this.fournisseurService.updateFournisseur(fournisseur).subscribe(
        ()=>this.listFournisseur[i]=fournisseur
      )
    }else {
      //add a new product
      this.fournisseurService.addFournisseur(fournisseur).subscribe(
        ()=>this.listFournisseur.push(fournisseur),
        ()=>console.log('error')
      )

    }
    this.showFormTemplate = false;
  }
  showForm(){
    this.showFormTemplate =true
  }
  delete(f:Fournisseur){
    let i = this.listFournisseur.indexOf(f);
    this.fournisseurService.deleteFournisseur(f.idFournisseur).subscribe(
      ()=>this.listFournisseur.splice(i,1)
    )
  }
  updateForm(f:Fournisseur){
    this.showFormTemplate=true;
    this.inputFournisseur = f;


  }

}
