import {Client} from "./client";
import {detailFacture} from "./detailFacture";

export class Facture {
  idFacture!: number;
  montantRemise!: number;
  montantFacture!: number;
  dateFacture!: Date;
  active!: boolean;
  client!: Client;
  detailFactures!: detailFacture[];
}
