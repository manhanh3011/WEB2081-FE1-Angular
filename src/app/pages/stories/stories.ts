import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories: any[] = [];

  success = "";
  error = "";

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('http://localhost:3000/stories').subscribe({
      next: (data: any) => {
        this.stories = data;
      },
      error: () => {

      }
    })
  }

  deleteStory(id: number){
    this.success = "";
    this.error = "";
    const confirmDelete = confirm("Bạn có chắc chắn muốn xoá không?");
    if(!confirmDelete) return;

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((story) => story.id != id);
        this.success = "Xoá thành công";
      },
      error: () => {
        this.error = "Xoá thất bại";
      }
    })
  }
}
