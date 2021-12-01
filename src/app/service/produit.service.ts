import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../models/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  url: string | undefined;
  constructor(private http: HttpClient) {
    this.url ="http://localhost:8090/produit/"
  }

  getProduits(){
    return this.http.get<Produit[]>(this.url +"list");
  }
}
