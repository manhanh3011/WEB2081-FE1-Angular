import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories: any[] = [
    {
      title: 'One Piece',
      author: 'Oda',
      views: 100000,
      year: 1997,
      genre: 'Adventure',
      image: 'https://upload.wikimedia.org/wikipedia/vi/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg'
    },
    {
      title: 'Naruto',
      author: 'Kishimoto',
      views: 90000,
      year: 1999,
      genre: 'Action',
      image: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/hinh-nen-naruto-29.jpg'
    },
    {
      title: 'Doraemon',
      author: 'Fujiko F Fujio',
      views: 70000,
      year: 1969,
      genre: 'Comedy',
      image: 'https://images2.thanhnien.vn/528068263637045248/2023/11/9/doraemon-dac-biet-16995066653581222955078.png'
    },
    {
      title: 'Dragon Ball',
      author: 'Akira Toriyama',
      views: 95000,
      year: 1984,
      genre: 'Action',
      image: 'https://photo.znews.vn/w660/Uploaded/piqbzcvo/2020_12_28/1.jpg'
    },
    {
      title: 'Attack On Titan',
      author: 'Hajime Isayama',
      views: 85000,
      year: 2009,
      genre: 'Dark Fantasy',
      image: 'https://genk.mediacdn.vn/k:2014/1-1414752165457/hinh-anh-dau-tien-cua-truyen-anh-attack-on-titan-phien-ban-viet-nam.jpg'
    },
    {
      title: 'Bleach',
      author: 'Tite Kubo',
      views: 80000,
      year: 2001,
      genre: 'Action',
      image: 'https://kenh14cdn.com/2016/1-1471532392849.jpg'
    }
  ];
  handleClick(index: number){
    alert("Truyện số " + index)
  }
}
