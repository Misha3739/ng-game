import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponentComponent } from './game-component/game-component.component';
import { OddComponentComponent } from './game-component/odd-component/odd-component.component';
import { EvenComponentComponent } from './game-component/even-component/even-component.component';

import { GameStatus } from './game-status.enum';

@NgModule({
  declarations: [
    AppComponent,
    GameComponentComponent,
    OddComponentComponent,
    EvenComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
