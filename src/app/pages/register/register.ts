import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ){
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: ['', [Validators.required, Validators.minLength(6)]],
    }, {validators: this.matchPassword})
  };

  submitForm(){
    this.http.post(`http://localhost:3000/register`, this.registerForm.value).subscribe({
      next: (res: any) => {
        alert("Đăng ký thành công");
        localStorage.setItem('token', res.accessToken)
        this.registerForm.reset();
        this.router.navigate(['/login']);
      },
      error: () => {
        alert("Đăng ký thất bại");
      }
    })
  }

  get username(){
    return this.registerForm.get('username');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get rePassword(){
    return this.registerForm.get('rePassword');
  }

  matchPassword(form: any) {
    const password = form.get('password')?.value;
    const rePassword = form.get('rePassword')?.value;

    return password === rePassword ? null : { notMatch: true };
  }
}
