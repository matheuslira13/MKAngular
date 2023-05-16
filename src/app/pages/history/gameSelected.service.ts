import { Games } from './games.history.model';

import { Injectable } from '@angular/core';

@Injectable()
export class GameSelecteService {
  private gameSelected: any = 's';
  setGame(game: Games) {
    this.gameSelected = game;
  }
  getGame() {
    return this.gameSelected;
  }
}
