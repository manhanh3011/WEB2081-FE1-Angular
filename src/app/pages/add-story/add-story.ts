import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Story } from '../../services/story';

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
      private storyService: Story,
    ){
    this.addForm = this.fb.group({
      title: ["", Validators.required],
      author: "",
      views: "",       
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
}
