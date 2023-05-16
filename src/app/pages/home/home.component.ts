import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cardHomeInfo = [
    { title: 'Historias', img: '../assets/img/historias.jpg' },
    { title: 'Personagens', img: '../assets/img/personagens.jpg' },
    { title: 'Gap_List', img: '../assets/img/gapList.jpg' },
    { title: 'Noticias', img: '../assets/img/noticias.jpg' },
  ];
}
