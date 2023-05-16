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
import { CardCharactersComponent } from './components/card-characters/card-characters.component';
import { GapListComponent } from './pages/gap-list/gap-list.component';
import { LastNewsComponent } from './pages/last-news/last-news.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HistoryComponent } from './pages/history/history.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';

//services
import { GamesHistoryService } from './pages/history/games.history.service';
import { GamesDetailsService } from './pages/game-details/game.details.service';
import { GameSelecteService } from './pages/history/gameSelected.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ButtonComponent,
    CardCharactersComponent,
    GapListComponent,
    LastNewsComponent,
    CharactersComponent,
    HistoryComponent,
    GameDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [GamesHistoryService, GameSelecteService, GamesDetailsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
