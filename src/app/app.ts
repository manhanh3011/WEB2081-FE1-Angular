import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  title = 'my-app';
  fullName = "Trần Mạnh Ánh";
  age = 20;
  sayHello(){
    console.log("Hello word"); 
    alert("Xin chào " + this.fullName)   
  };

  handleClick(){
    alert("Bạn vừa click vào Button")
  }

  user: any = null;

  constructor(private router: Router){}

  ngOnInit() {
    const data = localStorage.getItem('user');
    if (data) {
      this.user = JSON.parse(data);
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
