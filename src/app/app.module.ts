import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app-routing.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { GapListComponent } from './pages/gap-list/gap-list.component';
import { LastNewsComponent } from './pages/last-news/last-news.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HistoryComponent } from './pages/history/history.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';

//services
import { GamesHistoryService } from './pages/history/games.history.service';
import { GamesDetailsService } from './pages/game-details/game.details.service';
import { GameSelecteService } from './pages/history/gameSelected.service';
import { CharacterService } from './pages/characters/characters.service';
import { CardCharactersItemComponent } from './components/card-characters-item/card-characters-item.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ButtonComponent,
    MainMenuComponent,
    GapListComponent,
    LastNewsComponent,
    CharactersComponent,
    HistoryComponent,
    GameDetailsComponent,
    CardCharactersItemComponent,
    CharacterDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    GamesHistoryService,
    GameSelecteService,
    GamesDetailsService,
    CharacterService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
