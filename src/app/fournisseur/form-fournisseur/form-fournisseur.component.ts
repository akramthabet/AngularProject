import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Fournisseur} from "../../models/fournisseur";

@Component({
  selector: 'app-form-fournisseur',
  templateUrl: './form-fournisseur.component.html',
  styleUrls: ['./form-fournisseur.component.css']
})
export class FormFournisseurComponent implements OnInit {
  form : FormGroup;
  private fournisseur: Fournisseur;

  @Output() addEvent = new EventEmitter<Fournisseur>()
  @Input() updateFournisseur : Fournisseur;

  constructor(private builder : FormBuilder) { }

  ngOnInit(): void {
    if (this.updateFournisseur === null){
      this.fournisseur = new Fournisseur();
    } else {
      this.fournisseur = this.updateFournisseur;
    }

    this.form = this.builder.group({
      'code' : [this.fournisseur.code, [Validators.required, Validators.minLength(5)]],
      'libelle' : [this.fournisseur.libelle, Validators.required],

    });
  }

  addFournisseur(form : FormGroup){
    this.fournisseur.code= form.value.code;
    this.fournisseur.libelle = form.value.libelle;

    this.addEvent.emit(this.fournisseur);
  }

}
