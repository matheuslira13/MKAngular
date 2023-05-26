import { Component } from '@angular/core';
import { CharacterService } from './characters.service';
import { Characters } from './characters.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  constructor(
    private charactersService: CharacterService,
    private router: Router
  ) {}
  characters?: Characters[];

  goToCharacterDetails(id: number | any) {
    this.router.navigate(['/characterDetails', id]);
  }

  ngOnInit() {
    this.charactersService
      .getCharacters()
      .subscribe((item) => (this.characters = item));
  }
}
