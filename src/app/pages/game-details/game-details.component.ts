import { Component } from '@angular/core';
import { Games } from '../history/games.history.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { spaceFunction } from '../../../assets/utils/spaceBreak';

import { MEAT_API } from '../../../app.api';

@Injectable()
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  id?: string;
  game?: any;

  getGameDetail(): Observable<Games[]> {
    return this.http.get<Games[]>(`${MEAT_API}games/${this.id}`);
  }
  spaceFunction = (e: any) => spaceFunction(e);
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.getGameDetail().subscribe((item) => (this.game = item));
  }
}
