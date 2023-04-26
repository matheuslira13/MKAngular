import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cardHomeInfo = [
    { title: 'Historias', img: '../assets/img/1.jpg' },
    { title: 'Personagens', img: '../assets/img/1.jpg' },
    { title: 'Gap_List', img: '../assets/img/1.jpg' },
    { title: 'Noticias', img: '../assets/img/1.jpg' },
  ];
}
