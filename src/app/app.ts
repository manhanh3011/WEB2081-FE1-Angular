import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  title = 'my-app';
  fullName = "Tran Manh Anh";
  age = 20;
  sayHello(){
    console.log("Hello word"); 
    alert("Xin chào " + this.fullName)   
  }
}
