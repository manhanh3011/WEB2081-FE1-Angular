import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: any[] = [];

  success = "";
  error = "";

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.http.get(`http://localhost:3000/products`).subscribe({
      next: (data: any) => {
        this.products = data;
      },
      error: () => {
        this.error = "Lỗi tải dữ liệu"
      }
    })
  };

  deleteProduct(id: number){
    const confirmDelete = confirm("Bạn có chắc chắn muốn xoá không?");
    if(!confirmDelete) return;

    this.http.delete(`http://localhost:3000/products/${id}`).subscribe({
      next: () => {
        this.products = this.products.filter((product) => product.id != id);
        this.success = "Xoá thành công"
      },
      error: () => {
        this.error = "Xoá thất bại"
      }
    })
  }
}
