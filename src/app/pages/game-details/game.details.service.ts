import { Games } from '../history/games.history.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from '../../../app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class GamesDetailsService {
  show: string | undefined;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      const id = params['id']; // Access the parameter value
      this.show = id;
    });
  }
  ngOnInit() {}

  getGameDetail(): Observable<Games[]> {
    return this.http.get<Games[]>(`${MEAT_API}games`);
  }
}
