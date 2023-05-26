import { Component, Input } from '@angular/core';
import { Characters } from '../../pages/characters/characters.model';

@Component({
  selector: 'app-card-characters-item',
  templateUrl: './card-characters-item.component.html',
  styleUrls: ['./card-characters-item.component.scss'],
})
export class CardCharactersItemComponent {
  @Input() name?: string | 'carregando';
  @Input() resumeInformation?: string | 'carregando';
  @Input() img?: string | 'carregando';
  @Input() character?: Characters | any;
  teste = this.character;
}
