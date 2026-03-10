# Angular Cơ Bản -- Buổi 1

## 1. Angular là gì?

Angular là một framework phát triển ứng dụng web **frontend** được phát
triển bởi Google. Angular sử dụng **TypeScript** để xây dựng các ứng
dụng **Single Page Application (SPA)**.

### Ưu điểm của Angular

-   Kiến trúc rõ ràng
-   Hỗ trợ TypeScript
-   Có CLI mạnh mẽ
-   Dễ mở rộng cho dự án lớn
-   Có hệ sinh thái lớn

------------------------------------------------------------------------

## 2. Cài đặt môi trường

### Bước 1: Cài NodeJS

Tải tại:

https://nodejs.org

Kiểm tra:

``` bash
node -v
npm -v
```

------------------------------------------------------------------------

### Bước 2: Cài Angular CLI

``` bash
npm install -g @angular/cli
```

Kiểm tra:

``` bash
ng version
```

------------------------------------------------------------------------

## 3. Tạo project Angular

### Tạo project mới

``` bash
ng new my-angular-app
```

Chọn:

    Would you like to add Angular routing? -> Yes
    Which stylesheet format -> CSS

------------------------------------------------------------------------

### Chạy project

``` bash
cd my-angular-app
ng serve
```

Mở trình duyệt:

    http://localhost:4200

------------------------------------------------------------------------

## 4. Cấu trúc project Angular

    src/
     ├── app/
     │   ├── app.component.ts
     │   ├── app.component.html
     │   ├── app.component.css
     │
     ├── assets/
     ├── index.html
     └── main.ts

### Giải thích

  File                 Chức năng
  -------------------- -----------------------
  main.ts              điểm bắt đầu ứng dụng
  app.component.ts     logic component
  app.component.html   giao diện
  app.component.css    style

------------------------------------------------------------------------

## 5. Component trong Angular

Component là **khối xây dựng cơ bản của Angular**.

Ví dụ:

### app.component.ts

``` ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular';
}
```

### app.component.html

``` html
<h1>{{ title }}</h1>
```

Angular sử dụng **Interpolation**:

    {{ variable }}

------------------------------------------------------------------------

## 6. Data Binding

Angular có nhiều kiểu binding.

### Interpolation

``` html
<h1>{{title}}</h1>
```

### Property Binding

``` html
<img [src]="imageUrl">
```

### Event Binding

``` html
<button (click)="clickMe()">Click</button>
```

------------------------------------------------------------------------

## 7. Tạo Component mới

``` bash
ng generate component home
```

hoặc

``` bash
ng g c home
```

Angular sẽ tạo:

    home/
     ├── home.component.ts
     ├── home.component.html
     ├── home.component.css

------------------------------------------------------------------------

# BÀI TẬP THỰC HÀNH

## Bài 1

Tạo project Angular mới.

Yêu cầu:

-   Tên project: `angular-learning`
-   Chạy project thành công

------------------------------------------------------------------------

## Bài 2

Thay đổi nội dung trang chủ:

    Xin chào Angular
    Tôi đang học Angular Framework

------------------------------------------------------------------------

## Bài 3

Tạo component mới tên:

    about

Hiển thị nội dung:

    Đây là trang giới thiệu

------------------------------------------------------------------------

## Bài 4

Tạo biến trong component:

``` ts
name = "Nguyen Van A"
age = 25
```

Hiển thị ra HTML:

    Tên: ...
    Tuổi: ...

------------------------------------------------------------------------

## Bài 5 (Nâng cao)

Tạo button:

    Click Me

Khi click hiển thị:

    Bạn đã click button

------------------------------------------------------------------------

# TỔNG KẾT BUỔI 1

Trong buổi này bạn đã học:

-   Angular là gì
-   Cài đặt Angular CLI
-   Tạo project Angular
-   Cấu trúc project
-   Component
-   Data Binding cơ bản

Buổi sau sẽ học:

-   Routing
-   Service
-   HTTP API
-   CRUD Angular
