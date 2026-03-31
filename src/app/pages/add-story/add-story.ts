import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  StorySevice } from '../../services/story';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

  loading = false;
  success = "";
  error = "";

  constructor(
      private fb: FormBuilder,
      private http: HttpClient,
      private storyService: StorySevice,
      private router: Router,
    ){
    this.addForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(6)]],
      author: ["", [Validators.required, Validators.minLength(6)]],
      views: ["", [Validators.required, Validators.min(0)]],   
      image: "",
    })
  }

  submitForm(){
    this.loading = true;
    this.success = "";
    this.error = "";

    const data = this.addForm.value;

    this.storyService.create(data).subscribe({
      next: () => {
        this.loading = false;
        this.success = "Thêm truyện thành công";
        this.addForm.reset();
        this.router.navigate(['/stories'])
      },
      error: () => {
        this.loading = false;
        this.error = "Thêm thất bại";
      }
    })
  };

  get title(){
    return this.addForm.get("title");
  }

  get author(){
    return this.addForm.get("author");
  }

  get views(){
    return this.addForm.get("views");
  }
}
