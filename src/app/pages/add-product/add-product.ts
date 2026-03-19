import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../services/product';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  addFormProduct: FormGroup;

  success = "";
  error = "";
  loading = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private productService: Product,
  ){
    this.addFormProduct = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.min(1)],
      category: "",
    })
  }

  submitForm(){
    this.success = "";
    this.error = "";
    this.loading = true;

    const data = this.addFormProduct.value;

    this.productService.create(data).subscribe({
      next: () => {
        this.loading = false;
        this.success = "Thêm sản phẩm thành công";
        this.addFormProduct.reset();
      },
      error: () => {
        this.loading = false;
        this.error = "Thêm thất bại"
      }
    })
  }

  get name(){
    return this.addFormProduct.get('name');
  }

  get price(){
    return this.addFormProduct.get('price');
  }

}
