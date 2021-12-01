import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../service/produit.service";
import {Produit} from "../../models/produit";
import {detailFacture} from "../../models/detailFacture";
import {FactureService} from "../../service/facture.service";

@Component({
  selector: 'app-add-detail-facture',
  templateUrl: './add-detail-facture.component.html',
  styleUrls: ['./add-detail-facture.component.css']
})
export class AddDetailFactureComponent implements OnInit {

  listeProduit: Produit[] =[];
  detailFacture: detailFacture =new detailFacture();
  idProduit!: number;
  constructor(private serviceProduit:ProduitService, private serviceFacture: FactureService) { }

  ngOnInit(): void {
    this.serviceProduit.getProduits().subscribe(
      (res: Produit[]) => {
        this.listeProduit =res
      }
    );
  }
  ajouter(){
    this.detailFacture.facture.idFacture =1;
    this.detailFacture.produit.idProduit =this.idProduit;
    console.log(this.detailFacture.produit.idProduit);
    this.serviceFacture.ajouterDetailFacture(this.detailFacture);
  }

}
