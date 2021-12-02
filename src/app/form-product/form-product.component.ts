import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
 // @ts-ignore
  form: FormGroup;

  constructor(private builder : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.builder.group({

    });
  }



}
