import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  addFormProduct: FormGroup;

  constructor(private fb: FormBuilder){
    this.addFormProduct = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.min(1)],
      category: "",
    })
  }

  submitForm(){
    console.log(this.addFormProduct.value);  
  }

  get name(){
    return this.addFormProduct.get('name');
  }

  get price(){
    return this.addFormProduct.get('price');
  }

}
