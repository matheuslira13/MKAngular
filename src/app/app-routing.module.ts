import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { GapListComponent } from './pages/gap-list/gap-list.component';
import { LastNewsComponent } from './pages/last-news/last-news.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Historias', component: HistoryComponent },
  { path: 'Personagens', component: CharactersComponent },
  { path: 'Gap_List', component: GapListComponent },
  { path: 'Noticias', component: LastNewsComponent },
  {
    path: 'gameDetails/:id',
    component: GameDetailsComponent,
  },
  {
    path: 'characterDetails/:id',
    component: CharacterDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
