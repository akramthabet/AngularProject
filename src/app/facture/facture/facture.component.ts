import { Component, OnInit } from '@angular/core';
import {FactureService} from "../../service/facture.service";
import {Facture} from "../../models/facture";

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  liste: Facture[] =[];
  constructor(private factureService: FactureService) { }

  ngOnInit(): void {
    this.factureService.getFactures().subscribe(
      (res:Facture[])  => {
        this.liste = res;
        console.log(res);
      }
    );
  }
  delete(id: number){
    this.factureService.deleteFacture(id).subscribe(
      ()=> this.liste = this.liste.filter(factureFilter => factureFilter.idFacture != id)
    )
  }

}
