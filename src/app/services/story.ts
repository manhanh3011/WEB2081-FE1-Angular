import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Story } from '../interface/Story';

@Injectable({
  providedIn: 'root',
})
export class StorySevice {
  private api = 'http://localhost:3000/stories';

  constructor(private http: HttpClient){}
  
  create(data: Story) {
      return this.http.post(this.api, data)
    }
}
 