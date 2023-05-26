import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Characters } from '../characters/characters.model';
import { MEAT_API } from '../../../app.api';
import { spaceFunction } from '../../../assets/utils/spaceBreak';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  id?: string;
  characterSelected?: any;

  getCharacterDetail(): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${MEAT_API}characters/${this.id}`);
  }
  spaceFunction = (e: any) => spaceFunction(e);
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.getCharacterDetail().subscribe(
      (item) => (this.characterSelected = item)
    );
  }
}
