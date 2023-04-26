import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { CardCharactersComponent } from './components/card-characters/card-characters.component';
import { GapListComponent } from './pages/gap-list/gap-list.component';
import { LastNewsComponent } from './pages/last-news/last-news.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HistoryComponent } from './pages/history/history.component';
import { TestComponent } from './test/test.component';

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
    TestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
