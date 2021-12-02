import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Fournisseur} from "../../models/fournisseur";
import {FournisseurServiceService} from "../services/fournisseur-service.service";

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  @Input() fournisseur: Fournisseur;
  @Output() notification= new EventEmitter<Fournisseur>()
  @Output() deleteEvent = new EventEmitter<Fournisseur>()
  @Output() updateEvent = new EventEmitter<Fournisseur>()
  constructor() { }

  ngOnInit(): void {
  }
  notifyParent(){
    //traitement
    this.notification.emit(this.fournisseur)
  }
  deleteNotif(){
    this.deleteEvent.emit(this.fournisseur)
  }
  updateNotif(){
    this.updateEvent.emit(this.fournisseur)
  }

}
