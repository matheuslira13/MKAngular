import { Component, Injectable } from '@angular/core';
import { Games } from './games.history.model';
import { GamesHistoryService } from './games.history.service';
import { GameSelecteService } from './gameSelected.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  constructor(
    private gamesHistoryServices: GamesHistoryService,
    private router: Router,
    private gameSelected: GameSelecteService
  ) {}
  gameCover = '';
  gameName = '';
  gameText = '';
  out = false;

  games?: Games[];
  imgOut: any = (e: any) => {
    this.out = e;
  };

  imgHover: any = (e: any, show: boolean) => {
    this.gameCover = e?.gameFront;
    this.gameText = e?.resumeGame;
    this.gameName = e?.name;
    this.out = show;
  };
  goToGameSelected(gameCkiked: Games) {
    this.gameSelected.setGame(gameCkiked);
  }

  ngOnInit() {
    this.gamesHistoryServices
      .getGames()
      .subscribe((item) => (this.games = item));
  }
}
