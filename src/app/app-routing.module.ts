import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { GapListComponent } from './pages/gap-list/gap-list.component';
import { LastNewsComponent } from './pages/last-news/last-news.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Historias', component: HistoryComponent },
  { path: 'Personagens', component: CharactersComponent },
  { path: 'Gap_List', component: GapListComponent },
  { path: 'Noticias', component: LastNewsComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
