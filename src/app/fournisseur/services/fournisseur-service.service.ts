import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Fournisseur} from "../../models/fournisseur";

@Injectable({
  providedIn: 'root'
})
export class FournisseurServiceService {
  url= environment.url+"fournisseurs/"
  constructor(private http: HttpClient) { }
  getListFournisseur(){
    return this.http.get<Fournisseur[]>(this.url);
  }

  addFournisseur(fournisseur:Fournisseur){
    return this.http.post(this.url, fournisseur)
  }

    deleteFournisseur(idFournisseur: number | undefined){
    return this.http.delete(this.url+idFournisseur)
  }
  updateFournisseur(fournisseur: Fournisseur){
    return this.http.put(this.url+fournisseur.idFournisseur, fournisseur)
  }
}
