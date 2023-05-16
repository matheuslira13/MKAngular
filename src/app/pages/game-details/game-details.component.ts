import { Component } from '@angular/core';
import { Games } from '../history/games.history.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MEAT_API } from '../../../app.api';

@Injectable()
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    console.log('deveria ser o 2', this.game);
  }
  id?: string;
  game?: any;
  teste?: any = '';

  getGameDetail(): Observable<Games[]> {
    return this.http.get<Games[]>(`${MEAT_API}games/${this.id}`);
  }
  spaceFunction = (content: any) => content.replace(/\n/g, '</br></br>');
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.getGameDetail().subscribe(
      (item) => ((this.game = item), console.log('deveria ser o 1', item))
    );
  }
}
