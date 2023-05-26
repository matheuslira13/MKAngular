import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from './characters.model';
import { MEAT_API } from '../../../app.api';
import { Injectable } from '@angular/core';

@Injectable()
export class CharacterService {
  constructor(private http: HttpClient) {}
  getCharacters(): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${MEAT_API}characters`);
  }
}
