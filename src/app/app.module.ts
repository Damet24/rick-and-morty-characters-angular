import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleButtomComponent } from './components/toggle-buttom/toggle-buttom.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';
import { LinkButtonComponent } from './components/link-button/link-button.component';
import { HomeComponent } from './pages/home/home.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StatusPipe } from './pipes/status.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    ToggleButtomComponent,
    NavigationComponent,
    CharactersComponent,
    CharacterComponent,
    LinkButtonComponent,
    HomeComponent,
    CharactersPageComponent,
    CharacterPageComponent,
    NotFoundComponent,
    StatusPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
