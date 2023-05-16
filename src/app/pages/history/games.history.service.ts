import { Games } from './games.history.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from '../../../app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GamesHistoryService {
  constructor(private http: HttpClient) {}

  getGames(): Observable<Games[]> {
    return this.http.get<Games[]>(`${MEAT_API}games`);
  }
}
