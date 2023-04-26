import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-characters',
  templateUrl: './card-characters.component.html',
  styleUrls: ['./card-characters.component.scss'],
})
export class CardCharactersComponent {
  @Input() title: string | undefined;
  @Input() img: string | undefined;
}
