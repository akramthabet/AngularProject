import {Produit} from "./produit";
import {Facture} from "./facture";

export class detailFacture{
  idDetailFacture!: number;
  qte!: number;
  prixTotal!: number;
  pourcentageRemise!: number;
  montantRemise!: number;
  produit!: Produit;
  facture!: Facture;
}
