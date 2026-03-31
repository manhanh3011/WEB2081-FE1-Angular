import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-story',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-story.html',
  styleUrl: './edit-story.css',
})
export class EditStory {
  id: any;
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ){
    this.id = this.route.snapshot.paramMap.get("id");

    this.editForm = this.fb.group({
      title: ["", [Validators.required]],
      author: ["", [Validators.required]],
      views: ["", [Validators.required]],
      image: "",
    })
  }

  ngOnInit(){
    this.http.get(`http://localhost:3000/stories/${this.id}`).subscribe({
      next: (data: any) => {
        console.log(data); 
        this.editForm.patchValue(data);
      },
      error: () => {}
    })
  };

  submitForm(){
    if(!this.id) return;
    this.http.patch(`http://localhost:3000/stories/${this.id}`, this.editForm.value).subscribe({
      next: () => {
        alert("Cập nhật thành công") ;
        this.router.navigate(["/stories"])
      },
      error: () => {
        alert("Cập nhật thất bại");
      }
    })
  };

  get title(){
    return this.editForm.get("title");
  }

  get author(){
    return this.editForm.get("author");
  }

  get views(){
    return this.editForm.get("views");
  }
}
